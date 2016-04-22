describe('courses api service', function() {
  var courses = {
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

  it('should return a list of courses offered and their details', function() {
    var apiService = {};

    angular.mock.module({
      'apiService': {
        get: function(section) {
          return courses;
        }
      }
    });

    angular.mock.inject(function(_apiService_) {
      apiService = _apiService_;
    });

    expect(apiService.get('courses')).toEqual(courses);
  })
});
