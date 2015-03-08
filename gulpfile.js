var gulp = require('gulp');
var rimraf = require('rimraf');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');

var buildDir = './gen';
var outDir = './source';
var packages = [
  'ui',
  'pack',
  'server',
  'routes',
  'component',
  'platform',
  'request',
  'reducer',
  'object-assign',
  'raf-batching'
];

var src = {
  start: '../reapp/README.md',
  ui: '../reapp-ui/docs/*',
  modules: packages.map(function(name) {
    return '../reapp-' + name + '/README.md';
  })
};

gulp.task('clean', function(cb) {
  return rimraf(buildDir, cb);
});


// PAGES

gulp.task('modules', ['clean'], function() {
  return move('modules');
});

gulp.task('ui', ['clean'], function() {
  return move('ui');
});

gulp.task('start', ['clean'], function() {
  return move('start');
});

function move(name) {
  return gulp
    .src(src[name], { base: '../' })
    .pipe(concat(name+ '.md'))
    .pipe(wrap(header(name)))
    .pipe(gulp.dest(outDir));
}

function header(name) {
  return [
    'layout: docs',
    'title: ' + name,
    '---',
    '<%= contents %>'
  ].join("\n");
}

// WATCH

gulp.task('watch', function() {
  gulp.watch([src.modules], ['modules']);
  gulp.watch([src.start], ['start']);
  gulp.watch([src.ui], ['ui']);
});

gulp.task('default', ['modules', 'ui', 'start']);