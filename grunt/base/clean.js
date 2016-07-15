module.exports = function( grunt, config ) {
  return {
    javascripts: [ config.paths.public + '/javascripts' ],
    stylesheets: [ config.paths.public + '/stylesheets' ],
    fonts: [ config.paths.public + '/fonts' ]
  };
};
