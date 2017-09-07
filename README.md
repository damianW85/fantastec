Grunt Babel ES6 Boilerplate
===================


Hey guys, few weeks ago I was looking for an easy way to start small **ES6 front-end** projects quickly and as I didn't find anything matching with my desire so I created this little project ready to go **Hope you'll enjoy it.**

----------


What is this project doing ?
-------------

This project is helping to start your new font-end project by setting up all the basics modules and tools needed :

> - **Create** a **Dev** and **Production** environment for easy deployment and development.
> - **Watch** your files modifications and **Javascript errors**.
> - **Compile** in real time with babel your **ES6** files to **ES5**.
> - **Compile and Correct** in real time your **Sass** files.
> - **Create a production version** ready to be deployed on your server.

#### <i class="icon-folder-open"></i> Folder structure


```
.
├── LICENSE
├── build (Production folder)
├── dev (Dev folder)
├── node_modules (Dev folder)
	└── allyourmodulesfolders
├── gruntfile.js
├── install_all.sh
├── package.json
└── src
    ├── css
    ├── index.html
    ├── js
    │   ├── yourappfile.js
    │   ├── libs
    │   │   ├── createjs-2015.05.21.combined.js
    │   │   └── jquery-2.1.4.js
    │   └── model
    │       └── yourmodelsfiles.js
    ├── preload_manifest.json
    ├── sass
    │   ├── main.scss
    │   └── partials
    │       ├── _mixin.scss
    │       └── _variables.scss
    └── assets
        └── images
            ├── svg
            │   └── yoursvgfiles.svg
            └── yourimagesfiles
        ├── sounds
        └── videos
```

----------


Wich technology this project is using ?
-------------

#### <i class="icon-folder-open"></i> Tools 
* [Homebrew] - Package Manager. Allows to install, remove and updated applications and packages.
* [Grunt] - Automation, performing repetitive tasks like minification, compilation, unit testing and linting.
* [NodeJS] - Node.js is an open source, cross-platform runtime environment for server-side and networking applications.
*  [NPM] - A package manager for JavaScript.

#### <i class="icon-folder-open"></i> Libraries 
* [Jquery] - jQuery is a cross-platform JavaScript library designed to simplify the client-side scripting of HTML.
* [PreloadJS] - PreloadJS provides a consistent way to preload content for use in HTML applications. Preloading can be done using HTML tags, as well as XHR.

#### <i class="icon-folder-open"></i> Grunt NPM modules 
* [Autoprefixer] - Parse CSS and add vendor-prefixed CSS properties using the Can I Use database. Based on Autoprefixer.
* [Babelify] - Babel browserify transform
* [Browserify] - Browserify lets you require('modules') in the browser by bundling up all of your dependencies.
*  [BrowserSync] - Live CSS Reload & Browser Syncing.
* [Imagemin] - Minify PNG and JPEG images.
* [Clean] - Removes previously generated files and directories.
* [Concat] - Concatenate files with remote supports.
* [Sass] - Compile Sass to CSS using node-sass
* [Uglify] - A simple tool to uglify javascript & css files
* [Watch] - Run predefined tasks whenever watched file patterns are added, changed or deleted.
* [JShint] - Static analysis tool for JavaScript.
* [Htmlmin] - Minify HTML.
* [Copy] - Copy files.

----------


Installation
-------------------

To install you'll need to follow these few steps and respond to some questions, I created a script doing all the basics checks and installations that you'll need to start using this boilerplate.

```sh
$ git clone [git-https-repo-url]
$ cd <PROJECT_FOLDER>
$ sudo sh install_all.sh
```

----------

### Todo's

* Automatic index.html javascript src files modification
* SourceMap file for babelify and ES6 debug
* Add the loader to a loader manager written in ES6


----------


[NodeJS]:http://nodejs.org
[jQuery]:http://jquery.com
[Grunt]:http://gruntjs.com/
[Homebrew]:http://brew.sh/
[PreloadJS]:http://www.createjs.com/preloadjs
[Autoprefixer]:https://www.npmjs.com/package/grunt-autoprefixer
[Babelify]:https://www.npmjs.com/package/babelify
[Htmlmin]:https://www.npmjs.com/package/grunt-contrib-htmlmin
[Browserify]:http://browserify.org/
[BrowserSync]:https://www.npmjs.com/package/browser-sync
[Imagemin]:https://www.npmjs.com/package/lineman-imagemin
[Clean]:https://www.npmjs.com/package/grunt-clean
[Concat]:https://www.npmjs.com/package/grunt-concat
[Sass]:http://gulpjs.com
[Uglify]:https://www.npmjs.com/package/uglify
[Watch]:https://www.npmjs.com/package/grunt-contrib-watch
[JShint]:https://www.npmjs.com/package/grunt-contrib-jshint
[NPM]:https://www.npmjs.com/
[Copy]:https://www.npmjs.com/package/grunt-copy
