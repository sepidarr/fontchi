module.exports = function( grunt ) {

  grunt.registerTask('head'
  , 'concat/uglify jquery+angular which are required for application to work fine!'
  , function() {
    grunt.log.writeln('concat/uglify jquery+angular');
    grunt.task.run(['concat:head', 'uglify:head']);
  });

}
