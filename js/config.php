<?php
	define("__HOST__", "localhost");
	define("__USER__", "root");
	define("__PASS__", "");
	define("__BASE__", "project");
    
	class DB {
		private $con = false;
		private $data = array();
		
       
		public function __construct() {
			//if($this->con==false)
			$this->con = new mysqli(__HOST__, __USER__, __PASS__, __BASE__);
			
			if(mysqli_connect_errno()) {
				die("DB connection failed:" . mysqli_connect_error());
			}
		}

		public function qryPop() {
			$sql = "SELECT `id`,`title`,`description`,`added_date` FROM `blogs` WHERE `status` =0 ORDER BY `id` DESC";
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
			$this->con->close();
		}

		
			public function qrycPop() {
			$sql = "SELECT `id`,`title`,`description`,`added_date` FROM `blogs` WHERE `status` =1 ORDER BY `id` DESC";
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
			$this->con->close();
			return $this->data;
		}
		public function qrycFire($sql=null) {
			if($sql == null) {
				$this->qrycPop();
			} else {
				$this->con->query($sql);
				$this->qrycPop();	
			}
			return $this->data;
		}
		
		public function qryFire($sql=null) {
			if($sql == null) {
				$this->qryPop();
			} else {
				$this->con->query($sql);
				$this->qryPop();	
			}
			return $this->data;
		}
		public function updateselect($sql) {
			
			$qry = $this->con->query($sql);
			if($qry->num_rows > 0) {
				while($row = $qry->fetch_object()) {
					$this->data[] = $row;
				}
			} else {
				$this->data[] = null;
			}
			$this->con->close();
			return $this->data;
		}
		
	}
?>
