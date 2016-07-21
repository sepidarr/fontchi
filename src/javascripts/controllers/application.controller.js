(function() {

  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController( $scope, $http ) {
    var self = this;

    self.fonts = [];
    $scope.lineHeight = 30;
    $scope.fontSize = 20;

    var getFonts = function() {
      $http.get('/fonts').then(function( response ) {
        self.fonts = response.data.fonts;
      });
    }();

  }

})();
