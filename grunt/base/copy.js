module.exports = function( grunt, config ) {
  return {
    jquery: {
      src: config.libs.javascripts.jquery,
      dest: config.paths.public + '/javascripts/jquery.min.js'
    },
    angular: {
      src: config.libs.javascripts.angular,
      dest: config.paths.public + '/javascripts/angular.min.js'
    },
    foundation: {
      src: config.libs.javascripts.foundation,
      dest: config.paths.public + '/javascripts/foundation.min.js'
    },
    fontawesome: {
      expand: true,
      cwd: config.paths.bower + '/font-awesome/fonts',
      src: '**',
      dest: config.paths.public + '/fonts/fontawesome',
      flatten: true,
      filter: 'isFile'
    },
    templates: {
      expand: true,
      cwd: config.paths.src + '/templates',
      src: '**',
      dest: config.paths.public + '/templates',
      flatten: true,
      filter: 'isFile'
    }
  }
}
