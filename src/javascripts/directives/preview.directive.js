(function() {

  'use strict';

  angular
    .module('application')
    .directive('preview', PreviewDirective);

  function PreviewDirective() {
    return {
      restrict : 'E',
      templateUrl: '/static/templates/preview.directive.html',
      controller: 'PreviewController',
      controllerAs: 'vm'
    };
  }

})();
