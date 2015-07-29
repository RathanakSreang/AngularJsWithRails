angular.module("AngularDemo").controller("NavController", [ "$scope", function ( $scope) {
  $scope.home = "active";
  $scope.help = "";
  $scope.about = "";
  $scope.$on('$locationChangeSuccess',
    function(evt, next, current) {
      // console.log(evt);
    $scope.reset();
    if(next.match("/help")){
      $scope.help = "active";
    }else if(next.match("/about")){
      $scope.about = "active";
    }else{
      $scope.home = "active";
    }
  });
  $scope.reset = function(){
    $scope.home = "";
    $scope.help = "";
    $scope.about = "";
  }
}]);
