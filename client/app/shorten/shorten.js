angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {
  $scope.link = {};
  $scope.addLink = function (data) {
    console.log("SCOPE_SHORTEN: ", $scope.link);
    Links.postLinks($scope.link)
    .then(function(data){
      console.log("SHORTEN DATA: ", data);
      $location.path('/links');
    })
  };
});
