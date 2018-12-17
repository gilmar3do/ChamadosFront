(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaListagemController', EmpresaListagemController);
    
    EmpresaListagemController.$inject = ['$rootScope', 'SETTINGS', 'BaseService'];

    function EmpresaListagemController($rootScope, SETTINGS, BaseService) {
        var vm = this;
        vm.empresas = [];
        var empresas = null;
        //var empresas = localStorage.getItem(SETTINGS.EMPRESAS);
        /*$scope.add = function(){
            $http.get($scope.url).then(function(response) {
                      $scope.newMessage = response.data.queries.request.totalResults;
                      $scope.messages.push($scope.newMessage);
            });
        };*/
        empresas = BaseService.listar("empresa/Read.php")
        .then(function(response) {
            empresas = response.data.records;
            $rootScope.empresas = [];
            if (empresas) {
                var items = angular.fromJson(empresas);
                angular.forEach(items, function (value) {
                    $rootScope.empresas.push(value);
                });
            };

            activate();
        })
        .catch(function(error) {
            //Do stuff if the call returned an error
            console.log('Fiz alguma coisa Errado');
            return error;
        });

        function activate() {
            listarEmpresas();
        }

        function listarEmpresas() {

            vm.empresas = [];
            vm.empresas = $rootScope.empresas;

        }
    };
})();