angular
  .module('trackFilling')

  .controller('popoverCtrl', function($scope) {

    $scope.shouldDisplayPopover = function() {
      return $scope.displayPopover;
    };
  });
