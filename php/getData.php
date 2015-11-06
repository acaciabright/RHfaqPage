<?php
	include "connection.php";

	$tbl = mysqli_real_escape_string($link, $_POST['table']);
	$sort = mysqli_real_escape_string($link, $_POST['sort']);
	$section = mysqli_real_escape_string($link, $_POST['section']);

	$query = "SELECT * FROM " . $tbl . " WHERE category='" . $section . "' ORDER BY " . $sort . " ASC";

	$res = mysqli_query($link, $query);

	$answer = "SELECT * FROM Topics WHERE category='answer'";

	if($res === FALSE) {
		die('Failed ' . mysqli_error($link));
	}

	while($row = mysqli_fetch_assoc($res)) {

		$topicId = $row['topicId'];

		$tbl = "Steps";
		$sort = "stepNumber";
		$query2 = "SELECT * FROM " . $tbl . " WHERE topicId='" . $topicId . "' ORDER BY " . $sort . " ASC";
		$res2 = mysqli_query($link, $query2);

		$stepsArray = array();
		while($row2 = mysqli_fetch_assoc($res2)) {
			array_push($stepsArray, $row2);
		}
		$row['steps'] = $stepsArray;

		$enc[] = $row;
	}

	mysqli_free_result($res);

	mysqli_close($link);

	echo "OK" . "^S^P^L^I^T^" . json_encode($enc);
?>