describe('courses api service', function() {
  var coursesExpected = {
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

  var coursesByCategoryExpected = {
    "courses": [
      {
        "Title": "Beginning Android",
        "ID": "And20",
        "Category": "Java",
      }
    ]
  };

  var coursesAPI = {};

  beforeEach(module('coursesModule'));

  beforeEach(inject(function(_coursesAPI_) {
    coursesAPI = _coursesAPI_;
  }));

  it('should return a list of courses offered and their details', function() {
    expect(coursesAPI.get('courses')).toEqual(coursesExpected);
  });

  it('should return all courses of a category', function() {
    expect(coursesAPI.findCoursesByCategory('Java')).toEqual(coursesByCategoryExpected);
  });
});
