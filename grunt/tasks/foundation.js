module.exports = function( grunt ) {

  grunt.registerTask('foundation'
  , 'building a custom version of foundation with required variables/settings'
  , function() {
    grunt.log.writeln('building a custom version of foundation');
    grunt.task.run(['sass:foundation']);
  });

}
