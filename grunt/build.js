module.exports = function( grunt, config ) {

  grunt.registerTask('build'
  , 'building all required stylesheets/javascripts'
  , function() {
    grunt.log.writeln('building all required stylesheets/javascripts');
    grunt.task.run([
      'cleanall',
      'fontawesome',
      'foundation',
      'sass:styles',
      'copy:jquery',
      'copy:angular',
      'copy:foundation',
      'copy:templates',
      'head',
      'concat:libs',
      'concat:application'
    ])
  });

}
