(function() {

  'use strict';

  angular
    .module('application')
    .controller('PreviewController', PreviewController);

  function PreviewController( localStorageService, $http, $element ) {
    var self = this;

    self.fontStyle = {};
    self.moreDetailsEnabled = false;
    self.pin = pin;
    self.addToFavorites = addToFavorites;
    self.toggleDetails = toggleDetails;
    self.changeFontStyle = changeFontStyle;
    self.download = download;

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

    function download( font ) {
      $http({
        url: '/download',
        method: 'GET',
        params: { 
          font: font,
          type: self.fontStyle.name
        }
      })
    }

  }

})();
