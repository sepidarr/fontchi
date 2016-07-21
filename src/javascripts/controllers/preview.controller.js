(function() {

  'use strict';

  angular
    .module('application')
    .controller('PreviewController', PreviewController);

  function PreviewController( $element ) {
    var self = this;

    self.fontStyle = {};
    self.moreDetailsEnabled = false;
    self.toggleDetails = toggleDetails;
    self.changeFontStyle = changeFontStyle;

    var $details = $($element).find('.details');

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
