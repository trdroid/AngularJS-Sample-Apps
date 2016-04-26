angular.module('coursesModule', [])
  .factory('coursesAPI', function() {
    var coursesAPI = {};

    coursesAPI.get = function(section) {
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

    coursesAPI.findCoursesByCategory = function(category) {
        return {
          "courses": [
            {
              "Title": "Beginning Android",
              "ID": "And20",
              "Category": "Java",
            }
          ]
        };
    }

    return coursesAPI;
  });
