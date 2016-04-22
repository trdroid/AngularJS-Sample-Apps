angular.module('coursesModule', [])
  .factory('coursesApi', function() {
    var apiService = {};

    apiService.get = function(section) {
      return {
        "courses": [
          {
            "Title": "Beginning AngularJS",
            "ID": "Ang15",
            "Category": "JavaScript",
          },
          {
            "Title": "Beginning Android",
            "ID": "And20",
            "Category": "Java",
          }
        ]
      };
    }

    return apiService;
  });
