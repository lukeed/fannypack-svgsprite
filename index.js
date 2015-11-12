var Fannypack = require('fannypack')
var gulp      = require('gulp')
var $         = Fannypack.$

var imagemin    = require('gulp-imagemin')
var svgstore    = require('gulp-svgstore')

Fannypack.Tasks['svgSprite'] = function(config){
  if(!config.svgSprite) return

  gulp.task('svgSprite', function() {
    var settings = {
      src: $.Pather.join(config.root.src, config.svgSprite.src, '/*.svg'),
      dest: $.Pather.join(config.root.dest, config.svgSprite.dest)
    }

    return gulp.src(settings.src)
      .pipe( imagemin() )
      .pipe( svgstore() )
      .pipe( gulp.dest(settings.dest) )
      .pipe( $.BrowserSync.reload({stream: true}) )
  })
};
