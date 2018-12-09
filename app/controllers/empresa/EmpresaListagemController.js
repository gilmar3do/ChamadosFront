(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaListagemController', EmpresaListagemController);

    EmpresaListagemController.$inject = ['$rootScope'];

    function EmpresaListagemController($rootScope) {
        var vm = this;
        vm.empresas = [];

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