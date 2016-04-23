(function() {
	var studentsApp = angular.module('studentsApp', []);

	studentsApp.controller('MainController', function($scope) {
		var student = {
			name: "Albert Einstein",
			profilepic: "http://localhost:3000/images/profile/einstein.jpg"
		};

		$scope.student = student;
	});
}());