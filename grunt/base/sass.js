module.exports = function( grunt, config ) {
  return {
    fontawesome: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: config.paths.bower + '/font-awesome/scss/'
      },
      files: {
        './public/stylesheets/fontawesome.css':
        config.paths.src + '/stylesheets/sass/fontawesome.sass'
      }
    },
    foundation: {
      options: {
        sourcemap: 'none',
        quiet: true,
        loadPath: config.paths.bower + '/foundation-sites/scss/'
      },
      files: {
        './public/stylesheets/foundation.css':
        config.paths.src + '/stylesheets/sass/foundation.sass'
      }
    },
    styles: {
      files: {
        './public/stylesheets/styles.css': config.paths.src + '/stylesheets/sass/styles.sass'
      }
    }
  }
}
