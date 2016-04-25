### Create Project

Create a directory "courses-app"

```sh
> courses-app$ node -v

    v4.2.2

> courses-app$ npm -v

    2.14.7

> courses-app$ npm init

    This utility will walk you through creating a package.json file.
    It only covers the most common items, and tries to guess sensible defaults.

    See `npm help json` for definitive documentation on these fields
    and exactly what they do.

    Use `npm install <pkg> --save` afterwards to install a package and
    save it as a dependency in the package.json file.

    Press ^C at any time to quit.
    name: (courses-app)
    version: (1.0.0)
    description:
    entry point: (index.js)
    test command:
    git repository:
    keywords:
    author:
    license: (ISC)
    About to write to /home/droid/onGit/AngularJS/courses-app/package.json:

    {
      "name": "courses-app",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "author": "",
      "license": "ISC"
    }


    Is this ok? (yes)
```

### Install Karma

```sh
> courses-app$ npm install karma --save-dev

    npm WARN package.json courses-app@1.0.0 No description
    npm WARN package.json courses-app@1.0.0 No repository field.
    npm WARN package.json courses-app@1.0.0 No README data
    npm WARN optional dep failed, continuing fsevents@1.0.7
    karma@0.13.21 node_modules/karma
    ├── graceful-fs@4.1.3
    ├── rimraf@2.5.2
    ├── batch@0.5.3
    ├── di@0.0.1
    ├── mime@1.3.4
    ├── colors@1.1.2
    ├── source-map@0.5.3
    ├── isbinaryfile@3.0.0
    ├── dom-serialize@2.2.1 (void-elements@2.0.1, custom-event@1.0.0, extend@3.0.0, ent@2.2.0)
    ├── glob@7.0.0 (path-is-absolute@1.0.0, inherits@2.0.1, inflight@1.0.4, once@1.3.3)
    ├── useragent@2.1.8 (lru-cache@2.2.4)
    ├── bluebird@2.10.2
    ├── connect@3.4.1 (utils-merge@1.0.0, parseurl@1.3.1, debug@2.2.0, finalhandler@0.4.1)
    ├── optimist@0.6.1 (wordwrap@0.0.3, minimist@0.0.10)
    ├── body-parser@1.15.0 (bytes@2.2.0, content-type@1.0.1, depd@1.1.0, raw-body@2.1.5, qs@6.1.0, on-finished@2.3.0, http-errors@1.4.0, debug@2.2.0, iconv-lite@0.4.13, type-is@1.6.11)
    ├── minimatch@3.0.0 (brace-expansion@1.1.3)
    ├── http-proxy@1.13.2 (eventemitter3@1.1.1, requires-port@1.0.0)
    ├── expand-braces@0.1.2 (array-unique@0.2.1, array-slice@0.2.3, braces@0.1.5)
    ├── chokidar@1.4.2 (path-is-absolute@1.0.0, inherits@2.0.1, glob-parent@2.0.0, async-each@0.1.6, is-glob@2.0.1, is-binary-path@1.0.1, readdirp@2.0.0, anymatch@1.3.0)
    ├── log4js@0.6.31 (semver@4.3.6, readable-stream@1.0.33)
    ├── lodash@3.10.1
    ├── core-js@2.1.1
    └── socket.io@1.4.5 (has-binary@0.1.7, debug@2.2.0, socket.io-parser@2.2.6, socket.io-adapter@0.4.0, engine.io@1.6.8, socket.io-client@1.4.5)
```

### Install Karma Command Line Utility

To access karma just by the "karma" command without having to provide the exact path of the karma executable, install karma-cli globally.

```sh
> courses-app$ npm install karma-cli -g

        /home/droid/software/node/node-v4.2.2-linux-x64/bin/karma -> /home/droid/software/node/node-v4.2.2-linux-x64/lib/node_modules/karma-cli/bin/karma
        karma-cli@0.1.2 /home/droid/software/node/node-v4.2.2-linux-x64/lib/node_modules/karma-cli
        └── resolve@1.1.7

> courses-app$ karma

        Command not specified.
        Karma - Spectacular Test Runner for JavaScript.

        Usage:
          karma <command>

        Commands:
          start [<configFile>] [<options>] Start the server / do single run.
          init [<configFile>] Initialize a config file.
          run [<options>] [ -- <clientArgs>] Trigger a test run.
          completion Shell completion for karma.

        Run --help with particular command to see its description and available options.

        Options:
          --help     Print usage and options.
          --version  Print current version.  
```

### Install Jasmine add-on and Choose Browser Target

Install Jasmine add-on and choose which browser to target when executing the tests.

> courses-app$ npm install karma-jasmine karma-chrome-launcher --save-dev

        npm WARN package.json courses-app@1.0.0 No description
        npm WARN package.json courses-app@1.0.0 No repository field.
        npm WARN package.json courses-app@1.0.0 No README data
        npm WARN peerDependencies The peer dependency jasmine-core@* included from karma-jasmine will no
        npm WARN peerDependencies longer be automatically installed to fulfill the peerDependency
        npm WARN peerDependencies in npm 3+. Your application will need to depend on it explicitly.
        jasmine-core@2.4.1 node_modules/jasmine-core

        karma-jasmine@0.3.7 node_modules/karma-jasmine

        karma-chrome-launcher@0.2.2 node_modules/karma-chrome-launcher
        ├── fs-access@1.0.0 (null-check@1.0.0)
        └── which@1.2.4 (isexe@1.1.2, is-absolute@0.1.7)

It is possible to target more than one browser at the same time, by installing respective browser adapters through npm.

<i> package.json </i>

```javascript
{
  "name": "courses-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jasmine-core": "^2.4.1",
    "karma": "^0.13.21",
    "karma-chrome-launcher": "^0.2.2",
    "karma-jasmine": "^0.3.7"
  }
}
```

### Get Jasmine

```sh
> courses-app$ curl -L -O https://github.com/jasmine/jasmine/releases/download/v2.4.1/jasmine-standalone-2.4.1.zip

          % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                         Dload  Upload   Total   Spent    Left  Speed
        100   602    0   602    0     0   1160      0 --:--:-- --:--:-- --:--:--  1162
        100 46770  100 46770    0     0  44743      0  0:00:01  0:00:01 --:--:--  114k


> courses-app$ unzip jasmine-standalone-2.4.1.zip

        Archive:  jasmine-standalone-2.4.1.zip
          inflating: MIT.LICENSE             
          inflating: lib/jasmine-2.4.1/jasmine_favicon.png  
          inflating: lib/jasmine-2.4.1/jasmine.js  
          inflating: lib/jasmine-2.4.1/jasmine-html.js  
          inflating: lib/jasmine-2.4.1/jasmine.css  
          inflating: lib/jasmine-2.4.1/console.js  
          inflating: lib/jasmine-2.4.1/boot.js  
          inflating: SpecRunner.html         
          inflating: src/Player.js           
          inflating: src/Song.js             
          inflating: spec/PlayerSpec.js      
          inflating: spec/SpecHelper.js      
```

### Setup Default Configuration for Karma

```sh
> courses-app$ karma init

        Which testing framework do you want to use ?
        Press tab to list possible options. Enter to move to the next question.
        > jasmine

        Do you want to use Require.js ?
        This will add Require.js plugin.
        Press tab to list possible options. Enter to move to the next question.
        > no

        Do you want to capture any browsers automatically ?
        Press tab to list possible options. Enter empty string to move to the next question.
        > Chrome
        >

        What is the location of your source and test files ?
        You can use glob patterns, eg. "js/*.js" or "test/**/*Spec.js".
        Enter empty string to move to the next question.
        > src/**/*.js
        > spec/**/*.js
        >

        Should any of the files included by the previous patterns be excluded ?
        You can use glob patterns, eg. "**/*.swp".
        Enter empty string to move to the next question.
        >

        Do you want Karma to watch all the files and run the tests on change ?
        Press tab to list possible options.
        > yes


        Config file generated at "/home/droid/onGit/AngularJS/courses-app/karma.conf.js".
```

*karma.conf.js*

```javascript
// Karma configuration
// Generated on Mon Feb 22 2016 23:01:28 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```
### Project Contents

![](_misc/project%20structure.png)

### Start Tests

Start the tests using the <i>karma start</i> command and by passing it the configuration file created above

```sh
> courses-app$ karma start karma.conf.js

        22 02 2016 23:04:44.676:WARN [karma]: No captured browser, open http://localhost:9876/
        22 02 2016 23:04:44.703:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
        22 02 2016 23:04:44.710:INFO [launcher]: Starting browser Chrome
        22 02 2016 23:05:04.623:INFO [Chrome 48.0.2564 (Linux 0.0.0)]: Connected on socket /#ZiOLUc6bGwtXIhoXAAAA with id 88103244
        Chrome 48.0.2564 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.039 secs / 0.011 secs)
```

The browser started is shown below

![](_misc/chrome%20launched%20on%20running%20tests%20using%20karma.png)

<b> Adding launch command to package.json </b>

To be able to run the tests using the <i>npm</i> command in the command-line, add the following to package.json file

```javascript
{
  "name": "courses-app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "./node_modules/karma/bin/karma start karma.conf.js"   <-------
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "jasmine-core": "^2.4.1",
    "karma": "^0.13.21",
    "karma-chrome-launcher": "^0.2.2",
    "karma-jasmine": "^0.3.7"
  }
}

```

Now, the tests can be run with the command: <i>npm test</i>

```sh
> courses-app$ npm test

        > courses-app@1.0.0 test /home/droid/onGit/AngularJS/courses-app
        > ./node_modules/karma/bin/karma start karma.conf.js

        22 02 2016 23:27:55.418:WARN [karma]: No captured browser, open http://localhost:9876/
        22 02 2016 23:27:55.449:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
        22 02 2016 23:27:55.504:INFO [launcher]: Starting browser Chrome
        22 02 2016 23:28:04.150:INFO [Chrome 48.0.2564 (Linux 0.0.0)]: Connected on socket /#-wNF7lk19xAMR65uAAAA with id 49340086
        Chrome 48.0.2564 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.026 secs / 0.011 secs)
```

The browser opens up, just like above.

### Install Phantomjs Launcher

PhantomJS launcher allows the tests to be run in a headless browser. This results in a faster feedback from running tests.

```sh
> courses-app$ npm install karma-phantomjs-launcher --save-dev

    npm WARN package.json courses-app@1.0.0 No repository field.
    npm WARN peerDependencies The peer dependency phantomjs-prebuilt@>=1.9 included from karma-phantomjs-launcher will no
    npm WARN peerDependencies longer be automatically installed to fulfill the peerDependency
    npm WARN peerDependencies in npm 3+. Your application will need to depend on it explicitly.
    \
    > phantomjs-prebuilt@2.1.4 install /home/droid/onGit/AngularJS/courses-app/node_modules/phantomjs-prebuilt
    > node install.js

    PhantomJS not found on PATH
    Downloading https://bitbucket.org/ariya/phantomjs/downloads/phantomjs-2.1.1-linux-x86_64.tar.bz2
    Saving to /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2
    Receiving...
      [========================================] 99%
    Received 22866K total.
    Extracting tar contents (via spawned process)
    Removing /home/droid/onGit/AngularJS/courses-app/node_modules/phantomjs-prebuilt/lib/phantom
    Copying extracted folder /tmp/phantomjs/phantomjs-2.1.1-linux-x86_64.tar.bz2-extract-1456252486111/phantomjs-2.1.1-linux-x86_64 -> /home/droid/onGit/AngularJS/courses-app/node_modules/phantomjs-prebuilt/lib/phantom
    Writing location.js file
    Done. Phantomjs binary available at /home/droid/onGit/AngularJS/courses-app/node_modules/phantomjs-prebuilt/lib/phantom/bin/phantomjs
    phantomjs-prebuilt@2.1.4 node_modules/phantomjs-prebuilt
    ├── progress@1.1.8
    ├── kew@0.7.0
    ├── adm-zip@0.4.7
    ├── md5@2.0.0 (crypt@0.0.1, charenc@0.0.1, is-buffer@1.0.2)
    ├── request-progress@2.0.1 (throttleit@1.0.0)
    ├── which@1.2.4 (isexe@1.1.2, is-absolute@0.1.7)
    ├── fs-extra@0.26.5 (path-is-absolute@1.0.0, klaw@1.1.3, graceful-fs@4.1.3, jsonfile@2.2.3, rimraf@2.5.2)
    └── request@2.67.0 (aws-sign2@0.6.0, forever-agent@0.6.1, oauth-sign@0.8.1, caseless@0.11.0, is-typedarray@1.0.0, tunnel-agent@0.4.2, stringstream@0.0.5, isstream@0.1.2, json-stringify-safe@5.0.1, extend@3.0.0, tough-cookie@2.2.1, node-uuid@1.4.7, qs@5.2.0, combined-stream@1.0.5, mime-types@2.1.10, form-data@1.0.0-rc3, hawk@3.1.3, bl@1.0.3, http-signature@1.1.1, har-validator@2.0.6)

    karma-phantomjs-launcher@1.0.0 node_modules/karma-phantomjs-launcher
    └── lodash@4.5.1
```

<b> Update karma.conf.js </b>

Update karma.conf.js to use the phantomjs launcher.

```javascript
// Karma configuration
// Generated on Mon Feb 22 2016 23:01:28 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],  <---------------------------------


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

### Run Tests

> courses-app$ npm test

    > courses-app@1.0.0 test /home/droid/onGit/AngularJS/courses-app
    > ./node_modules/karma/bin/karma start karma.conf.js

    23 02 2016 13:43:03.964:WARN [karma]: No captured browser, open http://localhost:9876/
    23 02 2016 13:43:04.029:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
    23 02 2016 13:43:04.074:INFO [launcher]: Starting browser PhantomJS
    23 02 2016 13:43:08.070:INFO [PhantomJS 2.1.1 (Linux 0.0.0)]: Connected on socket /#PRkTDnJem5pBz2pQAAAA with id 77568782
    PhantomJS 2.1.1 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.043 secs / 0.004 secs)

### Target Multiple Browsers

Include all the browsers that the tests have to be run on in the "browsers" property.

Example:

Use the PhantomJS launcher and a Chrome launcher to launch the tests in both the headless browser and the chrome browser simultaneously.

```javascript
// Karma configuration
// Generated on Mon Feb 22 2016 23:01:28 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/**/*.js',
      'spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS', 'Chrome'],  <----------------------


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

### Run Tests

```sh
> courses-app$ npm test

    > courses-app@1.0.0 test /home/droid/onGit/AngularJS/courses-app
    > ./node_modules/karma/bin/karma start karma.conf.js

    23 02 2016 13:47:44.046:WARN [karma]: No captured browser, open http://localhost:9876/
    23 02 2016 13:47:44.060:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
    23 02 2016 13:47:44.092:INFO [launcher]: Starting browser PhantomJS
    23 02 2016 13:47:44.147:INFO [launcher]: Starting browser Chrome
    23 02 2016 13:47:47.523:INFO [PhantomJS 2.1.1 (Linux 0.0.0)]: Connected on socket /#ntLDDKhUuYW9AW9pAAAA with id 11238550
    23 02 2016 13:48:08.012:INFO [Chrome 48.0.2564 (Linux 0.0.0)]: Connected on socket /#L9B75Jg_ZXDqBky0AAAB with id 32029095
    PhantomJS 2.1.1 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.051 secs / 0.007 secs)
    Chrome 48.0.2564 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.042 secs / 0.01 secs)
    TOTAL: 10 SUCCESS
```

This opens up the Chrome browser similar to the snapshot shown above.

Notice from the output that the tests were also run in the headless browser using the PhantomJS launcher.

### Configuring AngularJS and ngMock

*Links*

https://code.angularjs.org/

https://docs.angularjs.org/api/ngMock

**Get libraries**

```sh
droid@droidserver:~/onGit/AngularJS-Sample-Apps/courses-app/lib$ mkdir angular
droid@droidserver:~/onGit/AngularJS-Sample-Apps/courses-app/lib$ cd angular
droid@droidserver:~/onGit/AngularJS-Sample-Apps/courses-app/lib/angular$ curl -O https://code.angularjs.org/1.5.5/angular.min.js
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  154k  100  154k    0     0   238k      0 --:--:-- --:--:-- --:--:--  238k
droid@droidserver:~/onGit/AngularJS-Sample-Apps/courses-app/lib/angular$ curl -O https://code.angularjs.org/1.5.5/angular-mocks.js
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  102k  100  102k    0     0   322k      0 --:--:-- --:--:-- --:--:--  322k
droid@droidserver:~/onGit/AngularJS-Sample-Apps/courses-app/lib/angular$ ls
angular.min.js  angular-mocks.js
```

**Project Content**

![](_misc/Project%20Content%20after%20getting%20angular.png)

**Include libraries**

*SpecRunner.html*

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Jasmine Spec Runner v2.4.1</title>

  <link rel="shortcut icon" type="image/png" href="lib/jasmine-2.4.1/jasmine_favicon.png">
  <link rel="stylesheet" href="lib/jasmine-2.4.1/jasmine.css">

  <script src="lib/jasmine-2.4.1/jasmine.js"></script>
  <script src="lib/jasmine-2.4.1/jasmine-html.js"></script>
  <script src="lib/jasmine-2.4.1/boot.js"></script>

  <!-- include source files here... -->
  <script src="lib/angular/angular.min.js"></script>            <-----------------
  <script src="lib/angular/angular-mocks.js"></script>
  <script src="src/Player.js"></script>
  <script src="src/Song.js"></script>

  <!-- include spec files here... -->
  <script src="spec/SpecHelper.js"></script>
  <script src="spec/PlayerSpec.js"></script>

</head>

<body>
</body>
</html>
```

*karma.conf.js*

```javascript
// Karma configuration
// Generated on Mon Feb 22 2016 23:01:28 GMT-0500 (EST)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'lib/angular/angular.min.js',                             <-----------------
      'lib/angular/angular-mocks.js',
      'src/**/*.js',
      'spec/**/*.js'
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
```

**Remove template files**

Delete *spec/PlayerSpec.js* and *spec/SpecHelper.js*

### Writing a sample test

Assuming that the Web API returns the following data

```json
{
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
}
```

**Create the test case**

Create a file *spec/courses/api-service.spec.js*

```JavaScript
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
    var coursesAPI = {};
    expect(coursesAPI.get('courses')).toEqual(courses);
  })
});
```

**Project Contents**

![](_misc/On%20adding%20a%20basic%20test%20case.png)

**Making sure it fails**

```sh
~/onGit/AngularJS-Sample-Apps/courses-app$ npm test

> courses-app@1.0.0 test /home/droid/onGit/AngularJS-Sample-Apps/courses-app
> ./node_modules/karma/bin/karma start karma.conf.js

21 04 2016 11:51:12.406:WARN [karma]: No captured browser, open http://localhost:9876/
21 04 2016 11:51:12.419:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
21 04 2016 11:51:12.462:INFO [launcher]: Starting browser PhantomJS
21 04 2016 11:51:15.865:INFO [PhantomJS 2.1.1 (Linux 0.0.0)]: Connected on socket /#hAkOmNivO4EdwlYaAAAA with id 90341517
PhantomJS 2.1.1 (Linux 0.0.0) courses api service should return a list of courses offered and their details FAILED
	TypeError: undefined is not a function (evaluating 'apiService.get('courses')') in /home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js (line 19)
	/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js:19:26
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.041 secs / 0.001 secs)
```

**Writing just enough code to make the test pass**

*spec/courses/api-service.spec.js*

```javascript
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
    var coursesAPI = {
      get: function(section) {                <--------------
        return courses;
      }
    };
    expect(coursesAPI.get('courses')).toEqual(courses);
  })
});
```

```sh
21 04 2016 12:17:35.658:INFO [watcher]: Changed file "/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js".
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.037 secs / 0.001 secs)
```

### Cleanup

Remove unused template source files *src/Player.js* and *src/Song.js*


### Refactoring the code to use an Angular Module

The key to achieve this is to use the *angular.mock.module()* function which can be used in any of the following approaches.

* Anonymous object literal
* Anonymous function
* String alias
* Any combination of the above

### Anonymous object literal approach

This approach allows the modules and its components to be created inline, without having to reference any external modules by their names.
It is a quick way to prototype and test AngularJS components before they can be moved to external modules.

```javascript
angular.mock.module({         <------- object literal
  <module component name>: <value>
});
```

The following shows how a module and its service are created inline.

Create an angular module using the *angular.mock.module()* function and add a service to the module by passing in an object literal with the service name "apiService" as the key and assign it an object that contains the required function "get" which returns a list of courses.

*spec/courses/api-service.spec.js*

```js
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
    var courseAPI = {};                   

    angular.mock.module({                   <------------
      'coursesAPI': {
        get: function(section) {
          return courses;
        }
      }
    });

    expect(coursesAPI.get('courses')).toEqual(courses);
  })
});
```

It results in the following error error as the "coursesAPI" variable is empty and does not contain the "get" method, which is required for the line

```javascript
*expect(coursesAPI.get('courses')).toEqual(courses);
```

The "coursesAPI" variable should refer to the the "coursesAPI" service associated with the inline module, so it can use the "get" method needed.


```sh
PhantomJS 2.1.1 (Linux 0.0.0) courses api service should return a list of courses offered and their details FAILED
	TypeError: undefined is not a function (evaluating 'apiService.get('courses')') in /home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js (line 28)
	/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js:28:26
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.041 secs / 0.003 secs)
```

**Using *angular.mock.inject()* function**

The *angular.mock.module()* function just maintains a list of inline modules created but are not processed. To load these modules, the *angular.mock.inject()* function has to be used.


The general format of using the *angular.mock.inject()* involves calling it with a callback function as shown below

```javascript
angular.mock.inject(function(<name-of-service-to-be-located>) {  
  //save the handle to the located service in a variable
})  
```

The callback function passed to *angular.mock.inject()* declares the name of the service to be located as a parameter. It is by this name that the the *$locator* service of the *angular* module locates the service and injects it into this callback parameter.


The *angular.mock.inject()* function adds the *angular* and *ngMock* modules at the beginning of the modules maintained by the *angular.mock.module()* function; loads and processes them in order. This allows any services from the loaded modules to be located using the *$locator* service of the *angular* module.


The *$locator* service of the *angular* module locates the \<name-of-service-to-be-located\> and passes a reference to the parameter <name-of-service-to-be-located>, which can then be used within the callback function.  


In this case, the *angular.mock.inject()* function should be called as

```javascript
angular.mock.inject(function(apiService) {
  //save the reference to the apiService instance injected
});
```


The *angular.mock.inject()* loads and processes the *angular*, *ngMock* and the custom "apiService" modules in order.


The *angular.mock.inject()* then uses the *$locator* service of the loaded *angular* module to locate the "apiService" (name of the callback parameter) and then inject its reference to the function parameter "apiService".


```javascript
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
    var coursesAPI = {};

    angular.mock.module({
      'coursesAPI': {
        get: function(section) {
          return courses;
        }
      }
    });

    angular.mock.inject(function(coursesAPI) {            <--------------
      coursesAPI = coursesAPI;
    });

    expect(coursesAPI.get('courses')).toEqual(courses);
  })
});
```


The following error happens because of a name clash.

```sh
PhantomJS 2.1.1 (Linux 0.0.0) courses api service should return a list of courses offered and their details FAILED
	TypeError: undefined is not a function (evaluating 'apiService.get('courses')') in /home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js (line 32)
	/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js:32:26
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 (1 FAILED) ERROR (0.043 secs / 0.01 secs)
```

To resolve the issue with the name clash, the parameter name (which is the name of the service to be located) of the callback passed to *angular.mock.inject()* function can be underscore-wrapped.

```javascript
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
    var coursesAPI = {};

    angular.mock.module({
      'coursesAPI': {
        get: function(section) {
          return courses;
        }
      }
    });

    angular.mock.inject(function(_coursesAPI_) {            <--------------
      coursesAPI = _coursesAPI_;
    });

    expect(apiService.get('courses')).toEqual(courses);
  })
});
```

```sh
22 04 2016 16:35:02.533:INFO [watcher]: Changed file "/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js".
22 04 2016 16:35:02.738:INFO [watcher]: Changed file "/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js".
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.04 secs / 0.005 secs)
```

### Anonymous function approach

It uses the Angular's *$provide* service, which can be used to create a *factory* that contains the logic for getting the list of courses.

```javascript
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
    var coursesAPI = {};

    angular.mock.module(function($provide) {
      $provide.factory('coursesAPI', function() {
        return {
          get: function(section) {
            return courses;
          }
        }
      })
    });

    angular.mock.inject(function(_coursesAPI_) {
      coursesAPI = _coursesAPI_;
    });

    expect(coursesAPI.get('courses')).toEqual(courses);
  })
});
```

```sh
24 10 2016 22:22:28.807:INFO [watcher]: Changed file "/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js".
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.039 secs / 0.009 secs)
```

### String alias approach

This approach involves accessing a module by its name.

```javascript
angular.mock.module(<literal name of the module>);
```


In the previous approaches, the test case (*spec/courses/api-service.spec.js*) itself has the source code defined even though it was defined in an inline module. This code has to be refactored to an external angular module. Ideally, the test case should access the source code defined in an external angular module.


To use this approach, first refactor the code to use an external module that can then be accessed in the test case.

Create a source file (*src/courses/api-service.js*) that has the same sub-path and name (excluding the "spec" in the name) as its corresponding test file (*spec/courses/api-service.spec.js*). Create a module and associate a factory with it that contains the logic.

*src/courses/api-service.js*

```javascript
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

    return coursesAPI;
  });
```

Using this approach in the current example

*spec/courses/api-service.spec.js*

```javascript
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
    var coursesAPI = {};

    angular.mock.module('coursesModule');

    angular.mock.inject(function(_coursesAPI_) {
      coursesAPI = _coursesAPI_;
    });

    expect(coursesAPI.get('courses')).toEqual(courses);
  })
});
```

```sh
24 10 2016 23:34:01.823:INFO [watcher]: Changed file "/home/droid/onGit/AngularJS-Sample-Apps/courses-app/spec/courses/api-service.spec.js".
PhantomJS 2.1.1 (Linux 0.0.0): Executed 1 of 1 SUCCESS (0.038 secs / 0.02 secs)
```

### Any combination of the above

The *angular.mock.module()* function accepts multiple arguments of any of the above mentioned types

```javascript
angular.mock.module(<module literal name>, <anonymous function>, <object literal>);
```
