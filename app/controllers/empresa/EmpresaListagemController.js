(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaListagemController', EmpresaListagemController);
    
    EmpresaListagemController.$inject = ['$rootScope', 'SETTINGS', 'BaseService'];

    function EmpresaListagemController($rootScope, SETTINGS, BaseService) {
        var vm = this;
        vm.empresas = [];
        var empresas;
        //var empresas = localStorage.getItem(SETTINGS.EMPRESAS);
        /*$scope.add = function(){
            $http.get($scope.url).then(function(response) {
                      $scope.newMessage = response.data.queries.request.totalResults;
                      $scope.messages.push($scope.newMessage);
            });
        };*/
        /*$http.get("http://localhost/ChamadosAPI/api/empresa/Read.php")
        .then(function(response) {
            empresas =  response.data.records;
        });*/
        empresas = BaseService.listar("empresa/Read.php");

        $rootScope.empresas = [];
        
        console.log('Fiz alguma coisa2: ' + empresas);
        if (empresas) {
            var items = angular.fromJson(empresas);
            angular.forEach(items, function (value) {
                console.log('Fiz alguma coisa3: '+value.nome);
                console.log('Fiz alguma coisa4: '+value);
                $rootScope.empresas.push(value);
            });
        }

        activate();

        function activate() {
            listarEmpresas();
        }

        function listarEmpresas() {

            vm.empresas = [];
            vm.empresas = $rootScope.empresas;

        }
    };
})();