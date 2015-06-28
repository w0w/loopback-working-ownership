angular
  .module('app')
  .controller('AuthLoginController', ['$scope', 'AuthService', '$state',
    function($scope, AuthService, $state) {
      $scope.user = {
        username: 'sam',
        password: 'sam'
      };

      $scope.login = function() {
        AuthService.login($scope.user.username, $scope.user.password)
          .then(function() {
            $state.go('main');
          });
      };

      $scope.login();
    }])
  .controller('AuthLogoutController', ['$scope', 'AuthService', '$state',
    function($scope, AuthService, $state) {
      AuthService.logout()
        .then(function() {
          $state.go('login');
        });
    }])
  .controller('SignUpController', ['$scope', 'AuthService', '$state',
    function($scope, AuthService, $state) {
      $scope.user = {
        email: 'baz@qux.com',
        password: 'bazqux'
      };

      $scope.register = function() {
        AuthService.register($scope.user.email, $scope.user.password)
          .then(function() {
            $state.transitionTo('sign-up-success');
          });
      };
    }]);
