(function() {
	var studentsApp = angular.module('studentsApp', []);

	studentsApp.controller('MainController', function($scope, $http) {
		var onStudentsFetchComplete = function(response) {
			$scope.students = response.data;
		}

		var onErrorHandler = function(e) {
			$scope.error = "Error occurred in fetching the students datad";
		}

		$http.get("http://localhost:3000/students").then(onStudentsFetchComplete, onErrorHandler);		
	});
}());