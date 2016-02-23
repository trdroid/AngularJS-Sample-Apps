### Create Project

Create a directory "courses-app"

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

### Install Karma

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

### Install Karma Command Line Utility

To access karma just by the "karma" command without having to provide the exact path of the karma executable, install karma-cli globally. 

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

### Setup Default Configuration for Karma

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

<i> karma.conf.js </i>

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

<img src="_misc/project%20structure.png"/>

### Start Tests 

Start the tests using the <i>karma start</i> command and by passing it the configuration file created above

> courses-app$ karma start karma.conf.js

        22 02 2016 23:04:44.676:WARN [karma]: No captured browser, open http://localhost:9876/
        22 02 2016 23:04:44.703:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
        22 02 2016 23:04:44.710:INFO [launcher]: Starting browser Chrome
        22 02 2016 23:05:04.623:INFO [Chrome 48.0.2564 (Linux 0.0.0)]: Connected on socket /#ZiOLUc6bGwtXIhoXAAAA with id 88103244
        Chrome 48.0.2564 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.039 secs / 0.011 secs)

The browser started is shown below

<img src="_misc/chrome%20launched%20on%20running%20tests%20using%20karma.png"/>

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

> courses-app$ npm test

        > courses-app@1.0.0 test /home/droid/onGit/AngularJS/courses-app
        > ./node_modules/karma/bin/karma start karma.conf.js
        
        22 02 2016 23:27:55.418:WARN [karma]: No captured browser, open http://localhost:9876/
        22 02 2016 23:27:55.449:INFO [karma]: Karma v0.13.21 server started at http://localhost:9876/
        22 02 2016 23:27:55.504:INFO [launcher]: Starting browser Chrome
        22 02 2016 23:28:04.150:INFO [Chrome 48.0.2564 (Linux 0.0.0)]: Connected on socket /#-wNF7lk19xAMR65uAAAA with id 49340086
        Chrome 48.0.2564 (Linux 0.0.0): Executed 5 of 5 SUCCESS (0.026 secs / 0.011 secs)

The browser opens up, just like above.

### Install Phantomjs Launcher

PhantomJS launcher allows the tests to be run in a headless browser. This results in a faster feedback from running tests. 

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

