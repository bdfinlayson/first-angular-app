angular
  .module('tas', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/tas', {
        templateUrl: 'views/table.html',
        controller: 'TasController',
        controllerAs: 'tas'
      })
      .when('/tas/new', {
        templateUrl: 'views/form.html',
        controller: 'TasController',
        controllerAs: 'tas'
      })
      .when('/tas/:uuid', {
        templateUrl: 'views/show.html',
        controller: 'ShowController',
        controllerAs: 'show'
      })
      .otherwise({
        redirectTo: '/tas'
      })
  })
  .controller('ShowController', function ($routeParams, $http) {
    var vm = this,
        id = $routeParams.uuid;

    $http
      .get('https://mytas.firebaseio.com/tas/' + id + '.json')
      .success(function (data) {
        vm.ta = data;
      })
  })
  .controller('TasController', function ($scope, $http, $location) {
    var vm = this;

    vm.cohortOptions = [
      'N/A',
      'One',
      'Two',
      'Three',
      'Four',
      'Five',
      'Six',
      'Seven',
      'Eight',
      'Nine',
      'Ten'
    ];

    $http
      .get('https://mytas.firebaseio.com/tas.json')
      .success(function (data) {
        vm.data = data;
      });

    vm.addTA = function () {
      vm.newTA.name = 'Adam';
      vm.newTA.nickName = vm.newTA.firstName[0].toUpperCase() + 'Adam';

      console.log(vm.newTA);
      $http.post('https://mytas.firebaseio.com/tas.json', vm.newTA)
        .success(function (res) {
          vm.data[res.name] = vm.newTA;
          $location.path('/tas');
        });
    };

    vm.removeTA = function (id) {
      var url = 'https://mytas.firebaseio.com/tas/' + id + '.json';
      $http
        .delete(url)
        .success(function () {
          delete vm.data[id];
        });
    };

    vm.updateTA = function (id) {
      var url = 'https://mytas.firebaseio.com/tas/' + id + '.json';
      $http
        .put(url, vm.data[id]);
    };

    vm.editTA = function (person) {

    };

  });
