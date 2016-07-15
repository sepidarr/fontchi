(function() {

  'use strict';

  angular.module('application', [
    'ui.router',
    'LocalStorageModule'
  ]);

})();
(function() {

  'use strict';

  angular
    .module('application')
    .config(ApplicationConfig);

  function ApplicationConfig( localStorageServiceProvider ) {
    localStorageServiceProvider
      .setPrefix('fonti')
      .setNotify(true, true);
  }

})();
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
(function() {

  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController( $http, $scope ) {
    var self = this;

    $scope.lineHeight = 30;
    $scope.fontSize = 20;

    function getFonts() {
      $http.get('http://localhost:3000/fonts').then(function( response ) {
        self.fonts = response.data.fonts;
      });
    }

    getFonts();

  }

})();
(function() {

  'use strict';

  angular
    .module('application')
    .controller('PreviewController', PreviewController);

  function PreviewController( localStorageService, $element ) {
    var self = this;

    self.fontStyle = {};
    self.moreDetailsEnabled = false;
    self.pin = pin;
    self.addToFavorites = addToFavorites;
    self.toggleDetails = toggleDetails;
    self.changeFontStyle = changeFontStyle;

    var $details = $($element).find('.details');

    function pin( fontName ) {
      // return localStorageService.set('pin', fontName);
    }
    function addToFavorites( fontName ) {
      // return localStorageService.set('favorite', fontName);
    }

    function toggleDetails() {
      if (!self.moreDetailsEnabled) {
        $details.removeClass('hide');
      } else {
        $details.addClass('hide');
      }
      self.moreDetailsEnabled = !self.moreDetailsEnabled;
    }

    function changeFontStyle( fontName ) {
      var fontStyleName = self.fontStyle.name;
      $($element).attr('id', fontName + fontStyleName);
    }

  }

})();

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
    }
  }

})();