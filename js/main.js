angular
  .module('tas', [])
  .controller('TasController', function () {
    var vm = this;

    vm.data = [
      {
        name: 'TAdam'
      },
      {
        name: 'ZAdam'
      },
      {
        name: 'JuAdam'
      },
      {
        name: 'BrAdam'
      },
      {
        name: 'BAdam'
      }
    ];

    vm.addTA = function () {
      var obj = {
        name: vm.newName
      };

      vm.data.push(obj);
    }

    vm.removeTA = function (person) {
      var index = vm.data.indexOf(person);
      vm.data.splice(index, 1);
    };

  });
