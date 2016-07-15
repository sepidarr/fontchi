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