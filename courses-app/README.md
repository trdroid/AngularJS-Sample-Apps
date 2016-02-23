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


