angular
  .module('app')
  .controller('MainController', ['$scope', 'AuthService', '$state', 'UserThing', '$rootScope',
    function($scope, AuthService, $state, UserThing, $rootScope) {
      var vm = this;

      vm.result = UserThing.find();

      vm.user = $rootScope.currentUser;
    }
  ]);
