<?php
	include('config.php');

	$db = new DB();
    //$sql = "SELECT `title`,`description`,`added_date` FROM `blogs` WHERE `status` = 1";
	$data = $db->qrycPop();

	echo json_encode($data);
	?>