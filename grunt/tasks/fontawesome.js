module.exports = function( grunt ) {

  grunt.registerTask('fontawesome'
  , 'building a custom version of fontawesome with different fonts folder'
  , function() {
    grunt.log.writeln('building a custom version of fontawesome');
    grunt.task.run(['copy:fontawesome', 'sass:fontawesome']);
  });

}
