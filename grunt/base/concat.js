module.exports = function( grunt, config ) {
  return {
    head: {
      src: [
        config.libs.javascripts.jquery,
        config.libs.javascripts.angular
      ],
      dest: config.paths.public + '/javascripts/head.js'
    },
    libs: {
      src: config.libs.javascripts.common,
      dest: config.paths.public + '/javascripts/libs.js'
    },
    application: {
      src: [
        config.paths.src + '/javascripts/application.js',
        config.paths.src + '/javascripts/application.configs.js',
        config.paths.src + '/javascripts/application.routes.js',
        config.paths.src + '/javascripts/**/*.js'
      ],
      dest: config.paths.public + '/javascripts/application.js'
    }
  }
}
