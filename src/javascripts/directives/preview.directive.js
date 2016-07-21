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
      controllerAs: 'vm',
      link: function (scope,elem,attrs) {
        // Determine if last ng-repeat item has been loaded and then
        // Bind foundation to document
        // if (scope.$last === true) {
        //     elem.ready(function () {
        //         $(document).foundation();
        //         console.log("Sticky Started");
        //     });
        // }
      }
    };
  }

})();
