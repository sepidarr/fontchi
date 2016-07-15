(function() {

  'use strict';

  angular
    .module('application')
    .config(ApplicationRoutes);

  function ApplicationRoutes( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('editor');

    $stateProvider
      .state('editor', {
        url: '/editor',
        templateUrl: '/static/templates/editor.html'
      });

  }

})();