# Spearhead
AngularJS Boilerplate

## Table of Contents
1. [Technologies](#technologies)
    * [Web Application Framework](#web-application-framework)
        * [AngularJS](#angularjs)
    * [JavaScript Pre-Processor](#javascript-pre-processor)
        *  [ES6 (Babel)](#es6-babel-)
    * [Task Runner](#task-runner)
        *  [GulpJs](#gulpjs)
    * [Development Server](#development-server)
        *  [BrowserSync](#browsersync)
    * [UI Framework](#ui-framework)
        *  [Bootstrap](#bootstrap)
        *  [Angular UI](#angular-ui)
    * [CSS Pre-Processor](#css-pre-processor)
        *  [Sass](#sass)
    * [Resource Handler](#resource-handler)
        *  [Restangular](#restangular)   
    * [Test Framework](#test-framework)
        *  [Karma](#karma)   
        *  [Jasmine](#jasmine)  
        *  [Protractor](#protractor)  
2. [Building the Project](#building-the-project)
3. [Gulp Tasks](#gulp-tasks)
    * [Core Tasks](#core-tasks)
    * [Features](#features)
    * [Optimization Process](#optimization-process)
    * [File Injection](#file-injection)
        *  [Bower Dependencies](#bower-dependencies)  
        *  [Source Code](#source-code)  
        *  [CSS Pre-processor Injection](#css-pre-processor-injection)  
        *  [Manual Injection](#manual-injection)
    * [Full Task Structure](#full-task-structure) 
4. [Test Configuration](#test-configuration)
5. [Project Structure](#project-structure)
    * [Key Files](#key-files)  
    * [Directory Structure](#directory-structure)


## Technologies

### Web Application Framework

#### AngularJS
> [AngularJS](https://angularjs.org/) is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write.

Angular was chosen for its large community and reliability, having existed since 2009. It uses a MVC architectural pattern that separates application logics, view and data and has a huge range of third-party modules. It has a mobile app framework [Ionic](http://ionicframework.com/) and built in testing via [Protractor](http://www.protractortest.org) and has also been integrated with a large number of other technologies including [Meteor](https://www.meteor.com/).

Other frameworks are viewed as superior, running more efficiently and using the latest technologies. However, they are all relatively new and rapidly changing, with less documentation and libraries. it is unknown how long support will exist for these technologies. There are also issues regarding past browser compatibility and a smaller pool of external libraries.

Alternatives:
* [Angular2](https://angular.io/) - A promising technology but still in Beta.
    * Performance improvements.
    * Full mobile integration.
    * Simplified code (TypeScript, removal of $scope and simplified directives).
    * Component based programming, resulting in less dependent and faster entities.
* [React](https://facebook.github.io/react/) - A JavaScript library developed by Facebook for building user interfaces.
    * Similar design to Angular2 and more popular.
    * Works by creating a virtual DOM in pure JavaScript via JSX (JavaScript XML) that acts as an intermediate representation of the DOM. This allows React to create a diff of your active and virtual DOM to decide which elements to change.
    * High performance when working with large datasets and using dynamic content.
    * Is a library, not a comprehensive framework so it requires additional tools.  
    * Released in 2013, with React native released in 2015. There are still regular major updates meaning documentation and third-party libraries are regularly outdated. 
* [Aurelia](http://aurelia.io/) - A full-stack SPA framework developed using ECMAScript 6 but still in Beta.
    * Developed by a lead Angular2 developer with the intention to create a simplified solution.
    * Aurelia is the only framework that lets you build components with plain JavaScript.
    * Easily integrated with 3rd party libraries, including jQuery, React and Bootstrap.
    * Has one of the largest git developer channels.
    * Appears to focus more on selling support than offering detailed open source documentation.

### JavaScript Pre-Processor

#### ES6 (Babel)
> Babel has support for the latest version of JavaScript through syntax transformers. These plugins allow you to use new syntax, right now without waiting for browser support.

[Babel](https://babeljs.io/) allows the latest features of ES6/ES2015 to be used by transpiling it to a version of JavaScript (ES5) that every browser can understand. ES6 offers a range of new features and helps to simplify code. As a result it is being adopted by a large number of modern technologies. Using ES6 should not only lead to more efficient development, but also helps to make upgrading from Angular to Angular2 more feasible.

### Task Runner
There are a lot of tasks involved with creating and deploying a front-end application.  Common tasks include watching file changes, concatenating/minifying files, prefixing files for different browsers and linting Javascript. A task runner automates this process.
    
#### GulpJS
>  Gulp is a toolkit that helps you automate painful or time-consuming tasks in your development workflow.

[Gulp](http://gulpjs.com/) is used to do front end tasks including:
* Starting up the web server.
* Reloading the browser automatically whenever a file is saved.
* Using pre-processors like Sass, LESS or ES6.
* Optimizing assets like CSS, JavaScript, and images.

The alternative to Gulp is [Grunt](http://gruntjs.com/). Grunt focuses on configuration, while Gulp focuses on code. Grunt has been around longer and integration with other technologies is more thoroughly documented, but Gulp has proven to run significantly faster in most cases by processing in-memory rather than using temporary files. 

This has resulted in it becoming the more popular technology in the last year. The comparison between the two is similar to that of Maven vs Gradle. 

### Development Server
The recommended development process is to serve web resources locally to be more reactive. It allows the use of features including the automatic reloading of pages when you make modifications.

#### BrowserSync
> With each web page, device and browser, testing time grows exponentially. From live reloads to URL pushing, form replication to click mirroring, Browsersync cuts out repetitive manual tasks. 

By connecting any number of devices & browsers a [BrowserSync](https://www.browsersync.io/) created URL can:
* Scroll on one browser; other browsers follow the scroll to the same point.
* Click links; other browsers load the clicked URL.
* Fill out & submit forms; other browsers submit.
* Test responsive designs; see the site rendered on different devices at one time.
* Change HTML, CSS & JS; automatically inject those new files without a page refresh.

This all allows for faster development and quick testing for inconsistencies across multiple browsers.

### UI Framework

#### Bootstrap
> Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web.

The two most popular design frameworks are [Bootstrap](http://getbootstrap.com/) and [Foundation](http://foundation.zurb.com/). Both are very similar, enabling you to utilize ready-made styles with cross-browser compatibility and LESS/Sass functionality. The pros/cons of each are listed below:

##### Bootstrap
* Uses LESS but supports Sass.
* Better community support.
* More browser & mobile support.
* More stable.
* Bootstrap projects tend to have a set look.

##### Foundation
* Uses Sass.
* More freedom over design.
* Superior grid system.
* Releases tend to be less stable.

Bootstrap has been selected largely due to its stability and larger community. It has stronger mobile and browser support and its grid system is set to improve in the next major version. It also currently appears to be more compatible with Angular2, potentially making it more future proof. 

#### Angular UI
> Angular UI is project that includes UI modules developed to use in AngularJS Applications. It includes UI-bootstrap that is Bootstrap UI elements for AngularJS. It also includes many other Angular variants of famous JQuery UI modules.

This repository contains a number of useful modules such as UI-Bootstrap, UI-Router and UI-Grid making developing an Angular application a much easier process. These modules have also had huge amounts of development and testing so are likely far more stable than custom written code. 

### CSS Pre-Processor

#### Sass
> Sass is the most mature, stable, and powerful professional grade CSS extension language in the world. Sass boasts more features and abilities than any other CSS extension language out there. Sass has been actively supported for over 9 years by its loving Core Team. 

Although Bootstrap natively comes with [LESS](http://lesscss.org/), [Sass](http://sass-lang.com/) has established itself as the superior technology. So much so that the next major version of Bootstrap (v4) is abandoning LESS in favour of Sass. 

Sass has access to [Compass](http://compass-style.org/) that has a huge catalog of Variables, Mixins and Functions. Sass also has several more powerful features such as nesting individual properties and selector inheritance.

The current stable version of Bootstrap (v3) has an official port using Sass found [here](https://github.com/twbs/bootstrap-sass).

### Resource Handler

#### Restangular
> Restangular is an AngularJS service that simplifies common GET, POST, DELETE, and UPDATE requests with a minimum of client code. It's a perfect fit for any WebApp that consumes data from a RESTful API.

Angular comes with ngResource for resource handling by default. However, [Restangular](https://github.com/mgonto/restangular) has several features that distinguish it from $resource:

* **It uses promises.** Instead of doing the "magic" filling of objects, it uses promises.
* **You can use this in $routeProvider.resolve.** As Restangular returns promises, you can return any of the methods in the $routeProvider.resolve and you'll get the real object injected into your controller if desired.
* **It doesn't have the same $resource bugs.** Restangular doesn't have problems with trailing slashes, additional : in the URL, escaping information, expecting only arrays for lists etc.
* **It supports all HTTP methods.**
* **It supports ETag out of the box**. ETags and If-None-Match will be used in all requests.
* **It supports self linking elements.** If you receive some item that has a link to itself from the server, you can use that to query the server instead of writing the URL manually.
* **You don't have to create one $resource object per request.** For each new request you can use the object that was returned by Restangular instead of creating a new object.
* **You don't have to write or remember ANY URL**. With $resource, you need to write the URL Template. Here, you don't write any URLs, just the name of the resource to fetch.
* **It supports nested RESTful resources.** Restangular can handle nested RESTful resources, you don't need the URL or path.
* **Restangular lets you create your own methods.** You can create your own methods to run the operation that you want.
* **Support for wrapped responses.** If your response for a list of elements returns an object with a property inside that has a list, it's very hard to use $resource.
* **You can build your own URLs with Restangular objects easily.** Restangular lets you create a Restangular object for any URL you want with a nice builder.

### Test Framework

#### Karma
> On the AngularJS team, we rely on testing and we always seek better tools to make our life easier. That's why we created
Karma - a test runner that fits all our needs.

[Karma](http://karma-runner.github.io) is a test runner for unit testing. At its core, Karma launches instances of the web browsers of choice, loads the files specified, and reports the results of the tests from the browsers back to the terminal. Karma can use different frameworks for testing JavaScript applications.

#### Jasmine
> Jasmine is a behaviour-driven development framework for testing JavaScript code. It does not depend on any other JavaScript frameworks. It does not require a DOM. And it has a clean, obvious syntax so that you can easily write tests. 

[Jasmine](http://jasmine.github.io/) has become the most popular choice for testing Angular applications. Jasmine provides functions to help with structuring your tests and also making assertions. As your tests grow, keeping them well-structured and documented is vital, and Jasmine helps achieve this.

The main alternative to Jasmine is [Mocha](https://mochajs.org/) with [Chai](http://chaijs.com/) and [Sinon](http://sinonjs.org/). Jasmine is a framework and has almost everything built into it including assertions/expectations and test double utilities (which come in the form of spies). On the other hand, Mocha is just a test runner and does not include assertion and test double utilities. There are several choices for assertions when using Mocha, with Chai tending to be the most popular. Test doubles in Mocha also requires another library and Sinon.js is often the de-facto choice. 

Up until the release of Jasmine 2, Mocha with its additional libraries was the superior choice. However with the recent updates to Jasmine most of these features have been implemented meaning there is little difference functionality-wise. Because of this Jasmine has been selected as it is likely easier to maintain a single library over many.

#### Protractor
> Protractor is an end-to-end test framework for AngularJS applications. Protractor runs tests against your application running in a real browser, interacting with it as a user would. 

[Protractor](http://www.protractortest.org) is an end-to-end automated testing framework for AngularJS applications and works as a solution integrator - combining powerful tools and technologies such as NodeJS, Selenium, webDriver, Jasmine, Cucumber and Mocha.

Protractor has a bunch of customizations from Selenium to easily create tests for AngularJS applications. It also speeds up your testing as it avoids the need for a lot of “sleeps” and “waits” in your tests, as it optimizes sleep and wait times. It also allows tests to be organized based on Jasmine, thus allowing you to write both unit and functional tests on Jasmine.

## Building the Project

Install [Node.js](https://nodejs.org/en/). The project was built using version 6.2.1. You will also need to install [Git](https://git-scm.com/). 

Once installed run the following commands from the `project/client` directory.

Install [Bower](https://bower.io/):

```
npm install -g bower
```

Install all development dependencies:

```
npm install
```
Install all Angular dependencies:

```
bower install
```
Install Jasmine for testing:

```
npm install -g jasmine
```
Install Gulp for automation:

```
npm install gulp -g
```
You should now be able to use the preconfigured Gulp tasks for building and testing the application.

## Gulp Tasks

### Core Tasks
Run gulp tasks from within the `project/client` folder.

* `gulp clean` - to delete the `/.tmp` & `/dist` directories.
* `gulp` or `gulp build` - to build an optimized version of your application in `/dist`.
* `gulp serve` -  to launch a browser sync server on your source files.
* `gulp serve:dist` -  to launch a server on your optimized application.
* `gulp test` - to launch unit tests with Karma.
* `gulp test:auto` - to launch unit tests with Karma in watch mode.
* `gulp protractor` - to launch your e2e tests with Protractor.
* `gulp protractor:dist` - to launch your e2e tests with Protractor on the dist files.

### Features

* **useref** : parses build blocks in HTML files to replace references.
* **ngAnnotate** : convert simple injection to complete syntax to be minification proof.
* **uglify** : optimize all your JavaScript.
* **csso** : optimize all your CSS.
* **autoprefixer** : add vendor prefixes to CSS.
* **rev** : add a hash in the file names to prevent browser cache problems.
* **watch** : watch your source files and recompile them automatically.
* **eslint** : the pluggable linting utility for JavaScript.
* **imagemin** : all your images will be optimized at build.
* **Unit test (karma)** : out of the box unit test configuration with karma.
* **e2e test (protractor)** : out of the box e2e test configuration with protractor.
* **browser sync** : full-featured development web server with livereload and devices sync.
* **angular-templatecache** : all HTML partials will be converted to JS to be bundled in the application.

### Optimization Process
The central piece of the optimization process is the use of `gulp-useref`. It is used to concat files and rewrite the `index.html` to point to the concat versions of the files. It works using HTML comment blocks starting with `<!-- build:(...) -> and ending with <!-- endbuild -->`.

The plugin allows the use of gulp filters to apply transformations for the different kinds of files. The build task filters the script files, then applies the optimization transformations like Uglify and then does the same for the styles.

The second important plugin used is `gulp-rev` which appends the content hash of the generated file names in order to prevent all cache problems when delivering a new version.

The optimisation process is configured (through the comments in `index.html`) to produced two JavaScript files, one for libraries and another for sources. It also produces a single CSS file.

All the HTML partials found in the sources are transformed in JavaScript with the plugin `gulp-angular-templatecache` and put in the sources bundle in a way that should be totally transparent for the Angular app.

All the "other" files that are not processed by any mechanism should be copied in the `/dist` folder with the same path by the 'other' task.

### File Injection
The index.html is full of comments and there is no (or very few) script and link tags. This is because gulp tasks automatically write them for you. It will not rewrite the `src/index.html` as it would be changing the sources. It will put the injected version in the `.tmp/serve` folder.

There are two types of file injection that will be performed, the injection of external dependencies from Bower and the injection of source files discovered in the `/src` directory.

#### Bower Dependencies
An external tool called [Wiredep](https://github.com/taptapship/wiredep) is used in the project to list the Bower dependencies and inject them in `index.html`.

In order to work correctly, all Bower dependencies should be listed in `bower.json`, installed in the `bower_components` folder and contain a `bower.json` of their own, listing the files to include in the property main.

A dependency wrongly installed or that doesn't link properly to the files included in its bower.json will not be injected properly. If this happens, you have a way to include files manually described later.

#### Source Code
The gulp scripts also automatically write the script and link tags for all source files. To do that, it looks through the full content of the `/src` folder and injects all the files into the `index.html`.

As the order of the files are important in JavaScript, the order is not chosen randomly. [Webpack](https://webpack.github.io/) analyses all source code and reorders the files respecting the dependencies discovered through the Angular modules.

#### CSS Pre-processor Injection
Although order is not important for CSS it does matter for CSS pre-processors so the injection process for style files must be handled differently. Injection must happen in the pre-processor file rather than the index.html. This means that in this special case, the "injection" will not be performed in the inject task but directly in the styles task. 

Bower supports linking dependencies of CSS preprocessed files. The gulp script will include statements for the project dependencies if they are defined correctly in `bower.json`.

#### Manual Injection
In the index.html file, there are two types of comments, some for the build process like <!-- build:js(src) scripts/vendor.js --> and some for the injection process like <!-- bower:js --> or <!-- inject:js -->. The injection comments are always put inside build comments because we want the inclusions to be made where the optimisation process will be able to find them.

The key is to manually add tags inside the build blocks to be part of the optimisation process, but outside of the inject blocks which will be overridden. Example:

```
<!-- build:css({.tmp/serve,src}) styles/vendor.css -->
<link rel="stylesheet" href="../custom-theme/style.css">
<!-- bower:css -->
<!-- run `gulp inject` to automatically populate bower styles dependencies -->
<!-- endbower -->
<!-- endbuild -->
```
Note, that the custom-theme folder also needs to be added to `gulp/server.js:browserSyncInit`'s list of routes. Otherwise, it won't be loaded via the server.

### Full Task Structure
```
├── partials
├─┬ html
│ ├── inject
│ └── partials
├── fonts
├── other
├── clean
├─┬ build
│ ├── html
│ ├── fonts
│ └── other
├── webdriver-update
├── webdriver-standalone
├─┬ protractor
│ └── protractor:src
├─┬ protractor:src
│ ├── serve:e2e
│ └── webdriver-update
├─┬ protractor:dist
│ ├── serve:e2e-dist
│ └── webdriver-update
├─┬ inject-reload
│ └── inject
├─┬ inject
│ ├── scripts
│ └── styles
├── scripts
├─┬ scripts:watch
│ └── scripts
├── scripts:test
├─┬ scripts:test-watch
│ └── scripts
├─┬ serve
│ └── watch
├─┬ serve:dist
│ └── build
├─┬ serve:e2e
│ └── inject
├─┬ serve:e2e-dist
│ └── build
├─┬ styles-reload
│ └── styles
├── styles
├─┬ test
│ └── scripts:test
├─┬ test:auto
│ └── scripts:test-watch
├─┬ watch
│ ├── scripts:watch
│ └── inject
└─┬ default
  └── clean
```

## Test Configuration
Tests files are currently placed in `test/e2e` and `test/unit` for end-to-end and unit tests respectively. The test scripts are then placed within a directory structure that matches its corresponding source code file. Test files are further defined using the file extension: `*.spec.js`, `*.pageobject.js` and `*.mock.js`.

The Karma configuration file `karma.conf.js` is set with the same features and configurations as the Gulp scripts. The File injection used to populate the `index.html` file is used with the same behaviours to parameter Karma.

PhantomJS is the default test browser, it's shipped inside the Npm install so it doesn't require to be installed globally. Chrome is currently listed as the next alternative. The dependencies have also been included for executing tests in Firefox and IE. 

Jasmine is set as the default testing framework. To allow tests to load HTML partials especially for the directives tests, a Karma plugin [karma-ng-html2js-preprocessor](https://github.com/karma-runner/karma-ng-html2js-preprocessor) is used.

The Protractor configuration file `protractor.conf.js` is set to also use PhantomJS as default and Chrome as secondary. Firefox and IE are simple to add in as well. Jasmine again is set as the default testing framework.

## Project Structure
The client folder is broken down into the following major subdirectories:

* **.tmp** - All pre-processed files for previewing changes locally.
* **bower_components** - All Angular dependencies.
* **dist** - The distributable compiled application.
* **gulp** - All automation scripts.
* **node_modules** - All project dependencies.
* **src** - All project source code including HTML, CSS, JS and images.
* **test** - All test scripts and configuration files.

The `src` folder is further broken down into the following directories.
* **app** - All views, services, controllers, modules and directives separated  into individual component folders. These are separated into the following two folders:
 * Components - All components unique to a single page.
 * Shared - All multiuse components that appear on more than one page.
* **assets** - All styles, fonts, translation, images and additional JS scripts.

### Key Files
* `src/index.html` - Used as the default template all html pages load within. All project required scripts and styles are injected here. 
* `src/app/index.config.js` - Used to set options for third part libraries.
* `src/app/index.module.js` - The container for the application controllers used in `index.html`. Must be updated when new controllers, services and directives are created.
* `src/app/index.route.js` - Uses UI-Router, used for assigning URLs, controllers and templates for different pages.
* `src/assets/index.scss` - Used to inject styles from bower dependencies. Use to override Bootstrap variables.
* `bower.json` - Contains all Angular dependencies. When installing via the command line use the following commands to add them automatically to `bower.json`:
 * `bower install <package> --save` for distributable dependencies.
 * `bower install <package> --save-dev` for development dependencies.
* `package.json` - Contains all Node.js dependencies. When installing via the command line use the following commands to add them automatically to `package.json`:
 * `npm install <package> --save` for distributable dependencies.
 * `npm install <package> --save-dev` for development dependencies.

### Directory Structure 
```
├── client
├	├── .tmp
├	├── bower_components
├	├	├── angular
├	├	├── angular-bootstrap
├	├	├── angular-ui-grid
├	├	├── angular-ui-router
├	├	├── bootstrap
├	├	├── jquery
├	├	├── moment
├	├	├── restangular
├	├	└── underscore
├	├── dist
├	├── gulp
├	├	├── build.js
├	├	├── conf.js
├	├	├── e2e-tests.js
├	├	├── inject.js
├	├	├── scripts.js
├	├	├── server.js
├	├	├── styles.js
├	├	├── unit-tests.js
├	├	└── watch.js
├	├── node_modules
├	├	├── babel
├	├	├── gulp
├	├	├── jasmine
├	├	├── karma
├	├	├── protractor
├	├	└── selenium
├	├── src
├	├	├── app
├	├	├	├── components
├	├	├	├	├── about
├	├	├	├	├	├── about.controller.js
├	├	├	├	├	├── about.service.js
├	├	├	├	├	└── about.view.html
├	├	├	├	└── home
├	├	├	├		├── home.controller.js
├	├	├	├		├── home.service.js
├	├	├	├		└── home.view.html
├	├	├	├── shared
├	├	├	├	└── navbar
├	├	├	├		├── navbar.directive.js
├	├	├	├		└── navbar.view.html
├	├	├	├── index.config.js
├	├	├	├── index.module.js
├	├	├	├── index.route.js
├	├	├	└── index.run.js
├	├	├── assets
├	├	├	├── css
├	├	├	├	├── components
├	├	├	├	├	├── about
├	├	├	├	├	├	└── about.scss
├	├	├	├	├	└── home
├	├	├	├	├		└── home.scss
├	├	├	├	├── override
├	├	├	├	├	├── mixins
├	├	├	├	├	├	└── alerts.scss
├	├	├	├	├	└── alerts.scss
├	├	├	├	├── shared
├	├	├	├	├	└── navbar
├	├	├	├	├		└── navbar.scss
├	├	├	├	└── index.scss
├	├	├	├── fonts
├	├	├	├	├── fontawesome-webfont.eot
├	├	├	├	├── fontawesome-webfont.svg
├	├	├	├	├── fontawesome-webfont.ttf
├	├	├	├	├── fontawesome-webfont.woff
├	├	├	├	└── fontawesome-webfont.woff2
├	├	├	├── i18n
├	├	├	├	├── de
├	├	├	├	└── en
├	├	├	├		├── components
├	├	├	├		├	├── about
├	├	├	├		├	├	└── about.json
├	├	├	├		├	└── home
├	├	├	├		├		└── home.json
├	├	├	├		└── shared
├	├	├	├			└── navbar
├	├	├	├				└── navbar.json
├	├	├	├── img
├	├	├	├	└── logo.png
├	├	├	└── js
├	├	├		└── custom.js
├	├	├── favicon.ico
├	├	└── index.html
├	├── test
├	├	├── assets
├	├	├	└── mock
├	├	├			├── components
├	├	├			├	├── about
├	├	├			├	├	└── about.json
├	├	├			├	└── home
├	├	├			├		└── home.json
├	├	├			└── shared
├	├	├				└── navbar
├	├	├					└── navbar.json
├	├	├── e2e
├	├	├	├── components
├	├	├	├	├── about
├	├	├	├	├	├── about.pageobject.js
├	├	├	├	├	└── about.spec.js
├	├	├	├	└── home
├	├	├	├	├	├── home.pageobject.js
├	├	├	├	├	└── home.spec.js
├	├	├	└── shared
├	├	├		└── navbar
├	├	├			├── navbar.pageobject.js
├	├	├			└── navbar.spec.js
├	├	├── unit
├	├	├	├── assets
├	├	├	├	└── js
├	├	├	├		└── custom.spec.js
├	├	├	├── components
├	├	├	├	├── about
├	├	├	├	├	└── about.spec.js
├	├	├	├	└── home
├	├	├	├		└── home.spec.js
├	├	├	└── shared
├	├	├		└── navbar
├	├	├			└── navbar.spec.js
├	├	├── karma.conf.js
├	├	└── protractor.conf.js
├	├── .bowerrc
├	├── bower.json
├	├── gulpfile.js
├	└── package.json
└── server
	└──
```
