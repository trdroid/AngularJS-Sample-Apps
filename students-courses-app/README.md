# Getting Started

### Initial Steps

![](_misc/project%20structure.png)

Got the required angular files from the "BlogSite" project in the MEAN-Sample-Apps repository.

### Defining a student's data locally and displaying it

*students-courses-app/public/MainController.js*

```javascript
(function() {
	var studentsApp = angular.module('studentsApp', []);

	studentsApp.controller('MainController', function($scope) {
		var student = {
			name: "Albert Einstein",
			profilepic: "http://localhost:3000/images/profile/einstein.jpg"  <--- served by the Express app
		};

		$scope.student = student;
	});
}());
```

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

### Starting the server

Started the server (code at <https://github.com/gruprog/Express.js-Sample-Apps/tree/master/students-courses-app>)

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

```

### Testing in the browser

On sending a request in the browser, the following is displayed

![](_misc/initial%20testing%20in%20the%20browser.png)

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

### Fetching students data from the server

On requesting http://localhost:3000/students, the server returns the following data

```

```

```javascript
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
```

```html
<!DOCTYPE html>
<html ng-app="studentsApp">
<body ng-controller="MainController">
	<div>Name: {{students[1].name}} </div>     ---------------
	<div>
		<img ng-src="{{students[1].profilepic}}" title="{{students[1].name}}">    ----------------
	</div>

	<script src="public/angular/angular.js"></script>
	<script src="public/MainController.js"></script>		
</body>
</html>
```

### Testing in the browser

![](_misc/XHR%20cannot%20be%20made%20error.png)

Notice the XHR request made to fetch students data from the server

![](_misc/XHR%20cannot%20be%20made%20-%20sources%20delivered.png)

Notice that the Origin is null

![](_misc/XHR%20cannot%20be%20made%20-%20students.png)

### On the server side

On starting the server and making the first request, the following is displayed

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

GET /students 304 20.017 ms - -
```

### Fixing it on the server side

To fix this issue, enable cors on the server side.

### Testing again



On the server side

```
droid@droidserver:~/onBB/Express.js-Sample-Apps/students-courses-app$ npm start

> students-courses@0.0.0 start /home/droid/onBB/Express.js-Sample-Apps/students-courses-app
> node ./bin/www

GET /students 304 14.936 ms - -
GET /images/profile/newton.jpg 304 6.187 ms - -
```
