var gulp = require('gulp');
var wrap = require('gulp-wrap');
var concat = require('gulp-concat');

var buildDir = './gen';
var outDir = './source';
var packages = [
  'routes',
  'component',
  'platform',
  'request',
  'reducer',
  'object-assign',
  'pack',
  'server'
];

var core = [
  'animations',
  // TODO: Determine if we need 'styles' here.
  // If not, remove the placeholder file at ../reapp-ui/docs/core/styles.md.
  // If so, document it properly in that file and reference it in ./README.md;
  // also, uncomment it in ./themes/landscape/layout/_partial/docs_nav.ejs.
  'styles',
  'themes',
  // TODO: Determine if we need 'viewlists' here.
  // If not, remove the placeholder file at ../reapp-ui/docs/core/viewlists.md.
  // If so, document it properly in that file and reference it in ./README.md;
  // also, uncomment it in ./themes/landscape/layout/_partial/docs_nav.ejs.
  'viewlists'
];

var src = {
  start: '../reapp/README.md',

  // docs
  // TODO: Split ../reapp-ui/docs/components/components.md into multiple files, one for each component.
  components: '../reapp-ui/docs/components/*',
  views: '../reapp-ui/docs/views/*',
  ui: '../reapp-ui/README.md',
  packages: packages.map(function(name) {
    return '../reapp-' + name + '/README.md';
  }),
  core: core.map(function(name) {
    return '../reapp-ui/docs/core/' + name + '.md';
  })
};


// PAGES

gulp.task('packages', function() {
  return move('packages');
});

gulp.task('components', function() {
  return move('components');
});

gulp.task('views', function() {
  return move('views');
});

gulp.task('ui', function() {
  return move('ui');
});

gulp.task('start', function() {
  return move('start', 'start');
});

gulp.task('core', function() {
  return core.forEach(function(name, i) {
    gulp
      .src(src.core[i], { base: '../' })
      .pipe(concat('docs-' + name + '.md'))
      .pipe(wrap(header(name, 'docs')))
      .pipe(gulp.dest(outDir));
  });
});

function move(name, layout) {
  layout = layout || 'docs';

  return gulp
    .src(src[name], { base: '../' })
    .pipe(concat(name + '.md'))
    .pipe(wrap(header(name, layout)))
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
  gulp.watch([src.packages], ['packages']);
  gulp.watch([src.start], ['start']);
  gulp.watch([src.components], ['components']);
  gulp.watch([src.views], ['views']);
  gulp.watch([src.ui], ['ui']);
  gulp.watch([src.core], ['core']);
});

gulp.task('default', ['packages', 'components', 'views', 'start', 'core', 'ui']);
