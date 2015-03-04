angular
  .module('tas', [])
  .controller('TasController', function () {
    var vm = this;

    vm.data = [
      {
        nickName: 'TAdam',
        name: 'Adam',
        firstName: 'Adam',
        lastName: 'Kèésecker'
      },
      {
        nickName: 'ZAdam',
        name: 'Adam',
        firstName: 'Zöe',
        lastName: 'Ames'
      },
      {
        nickName: 'JuAdam',
        name: 'Adam',
        firstName: 'Juan',
        lastName: 'Rødrįguež'
      },
      {
        nickName: 'BrAdam',
        name: 'Adam',
        firstName: 'Brian',
        lastName: 'Hiått'
      },
      {
        nickName: 'BAdam',
        name: 'Adam',
        firstName: 'Adam',
        lastName: 'Barñhærd'
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
