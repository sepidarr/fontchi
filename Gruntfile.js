module.exports = function( grunt ) {

  var path = require('path');

  require('load-grunt-config')(grunt, {

    // base grunt tasks path known as config files
    configPath: path.join(process.cwd(), 'grunt/base'),

    // auto grunt.initConfig
    init: true,

    // basic config file, thirdparty libraries and required paths for internal
    // use cases
    config: {
      paths: require('./grunt/config/paths.json'),
      libs: require('./grunt/config/libs.json')
    },

    jitGrunt: {
      customTasksDir: path.join(process.cwd(), 'grunt/tasks'),
      staticMappings: {
        'build': 'grunt/build.js'
      }
    }
  });

};
