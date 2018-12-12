(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaAlteracaoController', EmpresaAlteracaoController);

    EmpresaAlteracaoController.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS'];

    function EmpresaAlteracaoController($rootScope, $routeParams, $location, SETTINGS) {
        var vm = this;
        var id = $routeParams.id;

        vm.empresa = {};

        vm.salvar = salvar;

        activate();

        function activate() {
            listarEmpresa();
        }

        function listarEmpresa() {
            angular.forEach($rootScope.empresas, function (value, key) {
                if (value.id == id) 
                {
                    vm.empresa = value;
                }
            });
        }

        function salvar() {
            angular.forEach($rootScope.empresas, function (value, key) {
                if (value.id == id) {
                    $rootScope.empresas[key] = value;                    
                }
            });
            toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> atualizada com sucesso', 'Empresa Atualizada');
            localStorage.removeItem(SETTINGS.EMPRESAS);
            localStorage.setItem(SETTINGS.EMPRESAS, angular.toJson($rootScope.empresas));
            $location.path('/empresas');
        }
    };
})();