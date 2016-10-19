require('babel-polyfill');
require('babel-register');

//
// Dependencies
//
const path = require('path');
const glob = require('glob');
const gulp = require('gulp');

//
// Variables
//
<<<<<<< 22b7df431f50caf2ee584ef803e092a94fd67e8a
const gulpTasksSrc = './tasks/**/gulp.*.js';
=======
var gulpTasksSrc = './libs/tasks/**/gulp.*.js'
>>>>>>> Split hapijs plguin's definition (#57)

//
// Load Gulp Tasks
//
glob.sync(gulpTasksSrc)
<<<<<<< 22b7df431f50caf2ee584ef803e092a94fd67e8a
  .forEach((file) => require(path.resolve(file)));
=======
  .forEach((file) => require(path.resolve(file)))
>>>>>>> Split hapijs plguin's definition (#57)

//
// Default (gulp) task
//
//  * Lint Javascript files
//  * Run local node server
//  * Resatart on file changes
gulp.task('default', [
  'lint',
  'nodemon',
]);
