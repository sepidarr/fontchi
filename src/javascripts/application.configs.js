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