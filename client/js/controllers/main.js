angular
  .module('app')
  .controller('MainController', ['$scope', 'AuthService', '$state', 'UserThing',
    function($scope, AuthService, $state, UserThing) {
      var vm = this;

      vm.result = UserThing.find();

    }
  ]);
