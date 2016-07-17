(function() {

  'use strict';

  angular
    .module('application')
    .config(ApplicationRoutes);

  function ApplicationRoutes( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('fonts');

    $stateProvider
      .state('fonts', {
        url: '/fonts',
        templateUrl: '/static/templates/fonts.html'
      });

  }

})();
