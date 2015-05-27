function Controller($scope) {
  $scope.master= {};
 
  $scope.update = function(user) {
    $scope.master= angular.copy(user);
  };
 
  $scope.reset = function() {
    $scope.user = angular.copy($scope.master);
  };
  $scope.sayHello = function() {
    $scope.greeting = angular.copy($scope.master.name)
  };
  $scope.reset();
}