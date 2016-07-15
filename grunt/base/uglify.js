module.exports = function( grunt, config ) {
  return {
    head: {
      files: {
        './public/javascripts/head.min.js' : [
          config.paths.public + '/javascripts/head.js'
        ]
      }
    }
  }
}
