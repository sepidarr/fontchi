(function() {

  'use strict';

  angular
    .module('application')
    .controller('ApplicationController', ApplicationController);

  function ApplicationController($scope , getFonts) {
    var self = this;

    $scope.lineHeight = 30;
    $scope.fontSize = 20;

    // function getFonts() {
    //   $http.get('/fonts').then(function( response ) {
    //     self.fonts = response.data.fonts;
    //   });
    // }
    // getFonts();

    self.fontsList = new getFonts();

  }

  angular
    .module('application')
    .factory('getFonts', function($http) {
      var getFonts = function() {
        this.fonts = [];
        this.count = 0;
      };

      getFonts.prototype.loadMoreFonts = function() {
        $http.get("/fonts").success(function(data) {
          var items = data.fonts.slice(this.count*5,(this.count*5)+5);
          for (var i = 0; i < items.length; i++) {
            this.fonts.push(items[i]);
          }
          this.count += 1;
        }.bind(this));
      };

      return getFonts;
    });

})();
