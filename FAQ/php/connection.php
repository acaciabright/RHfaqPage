<?php
	//variables 
	$db = "dashboardFAQ";
	$db_host = "localhost";
	$db_user = "anewgo_owner";
	$db_pass = 'christian1';

	$link = mysqli_connect($db_host, $db_user, $db_pass);

	if(mysqli_connect_errno()) {
		die('Could not connect' . mysqli_connect_error());
	}
	//json_encode requires all data feeded in to be UTF-8 encoded and it will fail otherwise. 
	if (!mysqli_set_charset($link, "utf8")) {
	    printf("Error loading character set utf8: %s\n", mysqli_error($link));
	} else {
	    printf("Current character set: %s\n", mysqli_character_set_name($link));
	}

	$dbsel = mysqli_select_db($link, $db);

	if (!$dbsel) {
		die('Failed to open db ' . $db . " due to " . mysql_error());
	}
?>