var myApp = angular.module('controller',[])

myApp.controller('BlogCtrl', ['$scope', '$http', '$log','$location', '$anchorScroll', function($scope, $http, $log,$location, $anchorScroll) {
	$scope.frmToggle = function() {
		$('#blogForm').slideToggle();
	}	
	
	
	$scope.setData = function($params) { 
		$location.hash('topofpage');
        // call $anchorScroll()
        $anchorScroll();
	$('#blogForm1').slideToggle();
			$http.post('./js/updateselectdata.php',{'id':$params})
		.success(function(data) {		
			$scope.frm = data[0];	
          console.log($scope.frm);			
		})
		.error(function(err) {			
			$log.error(err);
		})
		
    }	
	$http.get('./js/popData.php')
	
		.success(function(data) {
		
	$scope.blogs = data;
		})
		.error(function(err) {
			$log.error(err);
		})

	$scope.pushData = function($params) {
		$http.post('./js/pushData.php',{'title':$params.title, 'description':$params.description})
			.success(function(data) {
				$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
			$('#blogForm').slideToggle();
	}

	
	$scope.markdone = function($params) {
		var cnfrm = confirm("Are you sure to mark it as completed?");
		if(cnfrm) {
			$http.post('./js/Markasdone.php', {'id':$params})
			.success(function(data) {
				$scope.blogs = data;
			})
			.error(function(err) {
				$log.error(err);
			})
		} else {
			// 
		}
	}
	$scope.updateData = function($params) {
		$http.post('./js/updatedata.php',{'id':$params.id, 'title':$params.title, 'description':$params.description})
			.success(function(data) {
				$scope.blogs = data;
				console.log($scope.blogs);
			})
			.error(function(err) {
				$log.error(err);
			})	
			$('#blogForm1').slideToggle();
			
	}
}])
myApp.controller('archiveCtrl', ['$scope', '$http', '$log','$location', '$anchorScroll', function($scope, $http, $log,$location, $anchorScroll) {

$http.get('./js/popcData.php')
	
		.success(function(data) {
		
	$scope.ctasks = data;
		})
		.error(function(err) {
			$log.error(err);
		})
		
		$scope.removeData = function($params) {
		var cnfrm = confirm("Are you sure to delete?");
		if(cnfrm) {
			$http.post('./js/removeData.php', {'id':$params})
			.success(function(data) {
				$scope.ctasks = data;
			})
			.error(function(err) {
				$log.error(err);
			})
		} else {
			// 
		}
	}



}])
	