angular
  .module('app')
  .factory('AuthService', ['Account', '$q', '$rootScope', function(Account, $q,
      $rootScope) {
    function login(username, password) {
      return Account
        .login({username: username, password: password})
        .$promise
        .then(function(response) {
          $rootScope.currentUser = {
            id: response.user.id,
            tokenId: response.id,
            username: username
          };
        });
    }

    function logout() {
      return Account
       .logout()
       .$promise
       .then(function() {
         $rootScope.currentUser = null;
       });
    }

    function register(email, password) {
      return Account
        .create({
         email: email,
         password: password
       })
       .$promise;
    }

    return {
      login: login,
      logout: logout,
      register: register
    };
  }]);
