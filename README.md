Symfony NGB (nodejs+gulp+bower) - Theming Tools
========================

Theming Notes
-------------

**The source files are in the web_src folder**
- JS source code lives in: web_src/js
- JS compiled code lives in: web/dist/js_min
- SASS source code lives in: web_src/sass
- CSS compiled code lives in: web/dist/css

**Tools in root directory - managed by npm. File: /package.json**
- Gulp
- Gulp extensions
- Bower
- Tool files live in /node_modules

**Third party libraries in managed by bower. File: /bower.json**
- Some library files live in /.libraries
- Some library files live in /libraries
- Some library files live in /bower_components

**Compiling - managed by gulp. File: /gulpfile.js**
- gulp bower:sass - brings bower files into /web_src/sass/bowerimports
- gulp bower:js - brings bower files into /web_src/js/bowerimports
- gulp sass:dev - compiles sass into css with sourcemaps
- gulp sass:devwatch - compiles sass and watches for new changes to recompile
- gulp sass:prod - compiles sass into css for production
- gulp js:prod - compiles and minifies js for production
- gulp - executes 'bower:sass', 'bower:js', 'sass:prod', 'js:prod' - in that order

**/.gitignore - ignores folders from bower and npm**
- /node_modules
- /.libraries
- /libraries
- /bower_components

**/.gitignore - ignores third party libraries brought into source code folders by gulp bower:sass and gulp bower:js**
- /web_src/sass/bowerimports
- /web_src/js/bowerimports

**Development**
- Add a list of all js files to be compiled in /web_src/gulpfile.js
- All files must be inside the web_src/js folder
- Add a list of all sass files to be compiled in /web_src/sass/styles.scss
- All files must be inside the web_src/sass folder

**Deploying**
- Run gulp in the command line from inside this project
