(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaExclusaoController', EmpresaExclusaoController);

    EmpresaExclusaoController.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS', 'BaseService'];

    function EmpresaExclusaoController($rootScope, $routeParams, $location, SETTINGS, BaseService) {
        var vm = this;
        var id = $routeParams.id;

        activate();

        function activate() {
            excluirEmpresa();
        }

        function excluirEmpresa() {
            angular.forEach($rootScope.empresas, function (value, key) {
                if (value.id === id) {
                    vm.empresa = BaseService.post("empresa/Delete.php", {id: id})
                    .then(function(response) {
                        //toastr.success('Empresa <strong>' + value.nome + '</strong> deletada com sucesso', 'Empresa Deletada');
                        //empresas = response.data.records;
                        //$rootScope.empresas = [];
                        //if (empresas) {
                        //    var items = angular.fromJson(empresas);
                       //     angular.forEach(items, function (value) {
                        //        $rootScope.empresas.push(value);
                       //     });
                       // };

                        //activate();
                    })
                    .catch(function(error) {
                        //Do stuff if the call returned an error
                        console.log('Fiz alguma coisa Errada');
                        return error;
                    });
                    //toastr.success('Empresa <strong>' + value.nome + '</strong> deletada com sucesso', 'Empresa Deletada');
                    //$rootScope.empresas.splice(key, 1);
                    
                }
            });
            //localStorage.removeItem(SETTINGS.EMPRESAS);
            //localStorage.setItem(SETTINGS.EMPRESAS, angular.toJson($rootScope.empresas));
            $location.path('/empresas');

        }
    };
})();