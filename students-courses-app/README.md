# Getting Started

### Initial Steps

![](_misc/project%20structure.png)

Got the required angular files from the "BlogSite" project in the MEAN-Sample-Apps repository.

*students-courses-app/index.html*

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

*students-courses-app/public/MainController.js*

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

### Start the server

Started the server (code at <https://github.com/gruprog/Express.js-Sample-Apps/tree/master/students-courses-app>)

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

```

### Testing in the browser

On sending a request in the browser, the following is displayed



On the server side, the following is printed to the console

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

GET /images/profile/einstein.jpg 304 10.700 ms - -         <------------------- on first request
GET /images/profile/einstein.jpg 304 3.248 ms - -          <------------------- on consecutive requests
GET /images/profile/einstein.jpg 304 1.186 ms - -
GET /images/profile/einstein.jpg 304 0.696 ms - -
```
