# JSBoilerplate [![Build Status](https://travis-ci.org/Argetloum/JSBoilerplate.png)](https://travis-ci.org/Argetloum/JSBoilerplate)

Quick Front-End Boilerplate using jQuery and ES6 ready thanks traceur-compiler, Sass and Gulp.

JavaScript task running, build processes, auto-minification and file concatenation, wrapped with an enhanced HTML5 boilerplated.

* Source: [github.com/Argetloum/JSBoilerplate](https://github.com/Argetloum/JSBoilerplate)


## Jump start

Get started with the boilerplate:

1. Clone the git repo — `git clone https://github.com/Argetloum/JSBoilerplate.git` and checkout the tagged release you need.
2. Execute in the shell `sudo npm install` to install each node.js dependencies, needed for [Gulp.](http://gulpjs.com/)
3. Execute in the shell `bower install` to install each front-end dependencies.
4. Execute in the shell `gulp` to generate the stylesheets and scripts files in the `app/assets/` folder.

## Features

Here are some of the main features of the boilerplate:

* jQuery lib
* ES6 ready thanks to traceur-compiler
* HTML5 semantics
* Baseline HTML5 features, DNS prefetching, responsive meta
* Encourages one-file CSS/JS in the view (HTML) for performance
* Includes Modernizr and HTML5 Shiv
* Google Universal Analytics snippet
* Open source workflow with Gulp running on Node.js
* Pre-setup Sass/SCSS files and folders for baseline project structure and imports
* Standard .gitignore to ignore minified files and standard ignorables such as .DS_Store
* JSHint .jshintrc file for configuring JavaScript linting

## Scaffolding

````
├── app
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   └── js
│   ├── apple-touch-icon-precomposed.png
│   ├── favicon.ico
│   └── index.html
├── src
│   ├── js
│   │   └── app.js
│   └── scss
│       ├── mixins
│       ├── modules
│       ├── partials
│       ├── vendor
│       └── style.scss
├── package.json
├── README.md
├── bower.json
├── gulpfile.js
├── .gitignore
├── .bowerrc
├── .jshintrc
````
