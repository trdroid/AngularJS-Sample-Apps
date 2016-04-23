# Getting Started

```html
<!DOCTYPE html>
<html ng-app="studentsApp">
<body ng-controller="MainController">
	<div>Name: {{student.name}} </div>
	<div>
		<img ng-src="{{student.profilepic}}" title="{{student.name}}">
	</div>

	<script src="public/angular/angular.js"></script>
	<script src="public/MainController.js"></script>		
</body>
</html>
```

```javascript
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
```
