module.exports = function( grunt ) {

  grunt.registerTask('clean.javascripts'
  , 'clean javascripts folder'
  , function() {
    grunt.log.writeln('clean javascripts folder');
    grunt.task.run([
      'clean:javascripts'
    ]);
  });

  grunt.registerTask('clean.stylesheets'
  , 'clean stylesheets folder'
  , function() {
    grunt.log.writeln('clean stylesheets folder');
    grunt.task.run([
      'clean:stylesheets'
    ]);
  });

  grunt.registerTask('cleanall'
  , 'clean all folders - javascripts, stylesheets and fonts'
  , function() {
    grunt.log.writeln('clean all folders - javascripts, stylesheets and fonts');
    grunt.task.run([
      'clean.javascripts',
      'clean.stylesheets'
    ])
  })

}
