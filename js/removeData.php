<?php

	$data = json_decode(file_get_contents("php://input"));
	
	include('config.php');

	$db = new DB();

	$sql = "DELETE FROM `blogs` WHERE `id` = $data->id";

	$data = $db->qrycFire($sql);

	echo json_encode($data);
?>