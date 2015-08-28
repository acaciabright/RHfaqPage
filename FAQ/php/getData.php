<?php
	include "connection.php";

	$tbl = mysqli_real_escape_string($link, $_POST['table']);
	$sort = mysqli_real_escape_string($link, $_POST['sort']);
	$section = mysqli_real_escape_string($link, $_POST['section']);

	$query = "SELECT * FROM " . $tbl . " WHERE category='" . $section . "' ORDER BY " . $sort . " ASC";

	$res = mysqli_query($link, $query);

	if($res === FALSE) {
		die('Failed ' . mysqli_error($link));
	}

	while($row = mysqli_fetch_assoc($res)) {
		$enc[] = $row;
	}

	mysqli_free_result($res);

	mysqli_close($link);

	echo "OK" . "^S^P^L^I^T^" . json_encode($enc);
?>