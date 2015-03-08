var gulp = require('gulp');
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

  // docs
  components: '../reapp-ui/docs/components/*',
  views: '../reapp-ui/docs/views/*',
  modules: packages.map(function(name) {
    return '../reapp-' + name + '/README.md';
  })
};


// PAGES

gulp.task('modules', function() {
  return move('modules');
});

gulp.task('components', function() {
  return move('components');
});

gulp.task('views', function() {
  return move('views');
});

gulp.task('start', function() {
  return move('start', 'start');
});

function move(name, layout) {
  return gulp
    .src(src[name], { base: '../' })
    .pipe(concat(name+ '.md'))
    .pipe(wrap(header(name, layout || 'docs')))
    .pipe(gulp.dest(outDir));
}

function header(name, layout) {
  return [
    'layout: ' + layout,
    'title: ' + name,
    '---',
    '<%= contents %>'
  ].join("\n");
}

// WATCH

gulp.task('watch', function() {
  gulp.watch([src.modules], ['modules']);
  gulp.watch([src.start], ['start']);
  gulp.watch([src.components], ['components']);
  gulp.watch([src.views], ['views']);
});

gulp.task('default', ['modules', 'components', 'views', 'start']);