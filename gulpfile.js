// *************************************
//
// Gulpfile
// (cf. https://github.com/drewbarontini/noise/blob/master/gulpfile.js)
//
// *************************************
//
// Available tasks:
//  'gulp'
//  'gulp watch'
//  'gulp copy:lib'
//  'gulp minify:js'
//
// *************************************


"use strict";


// -------------------------------------
// Plugins
// -------------------------------------

const gulp            = require("gulp");
const uglify          = require("gulp-uglify");
const rename          = require("gulp-rename");
const pump            = require("pump");



// -------------------------------------
// Options
// -------------------------------------

var options = {

  // ----- Default ----- //
  default: {
    tasks: ['compile:js']
  },

  // ----- Lib ----- //
  lib: {
    files: 'node_modules/photoswipe/dist/**/*',
    destination: 'lib/photoswipe'
  },

  // ----- JS ----- //
  js: {
    file: '_src/js/photoswipe-init.js',
    destination: 'js'
  },

  // ----- Watch ----- //
  watch: {
    files: function () {
      return [
        options.js.file
      ]
    },
    run: function () {
      return [
        ['compile:js']
      ]
    }
  }
};


// -------------------------------------
// Task : default
// -------------------------------------

gulp.task( 'default', options.default.tasks );


// -------------------------------------
// Task: copy:lib
// -------------------------------------

gulp.task( 'copy:lib', function () {
  gulp.src( options.lib.files )
    .pipe( gulp.dest(options.lib.destination) )
});


// -------------------------------------
// Task: compile:js
// -------------------------------------

gulp.task( 'compile:js', function () {
  gulp.src( options.js.file )
    .pipe( gulp.dest(options.js.destination) )
});


// -------------------------------------
// Task : minify:js
// -------------------------------------

gulp.task('minify:js', function (cb) {
  pump([
        gulp.src( options.js.file ),
        uglify(),
        rename( {suffix: '.min' }),
        gulp.dest( options.js.destination )
    ],
    cb
  );
});

// -------------------------------------
// Task : watch
// -------------------------------------

gulp.task('watch', function() {
  var watchFiles = options.watch.files();
  watchFiles.forEach( function( files, index ) {
    gulp.watch( files, options.watch.run()[ index ]  );
  });
});
