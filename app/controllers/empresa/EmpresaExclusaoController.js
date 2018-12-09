(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaExclusaoController', EmpresaExclusaoController);

    EmpresaExclusaoController.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS'];

    function EmpresaExclusaoController($rootScope, $routeParams, $location, SETTINGS) {
        var vm = this;
        var id = $routeParams.id;

        activate();

        function activate() {
            excluirEmpresa();
        }

        function excluirEmpresa() {
            angular.forEach($rootScope.empresas, function (value, key) {
                if (value.id == id) {
                    toastr.success('Empresa <strong>' + value.nome + '</strong> deletada com sucesso', 'Empresa Deletada');
                    $rootScope.empresas.splice(key, 1);
                }
            });
            localStorage.removeItem(SETTINGS.EMPRESAS);
            localStorage.setItem(SETTINGS.EMPRESAS, angular.toJson($rootScope.empresas));
            $location.path('/empresas');

        }
    };
})();