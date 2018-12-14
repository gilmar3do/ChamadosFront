(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaInclusaoController', EmpresaInclusaoController);

    EmpresaInclusaoController.$inject = ['$rootScope', '$location', 'SETTINGS'];

    function EmpresaInclusaoController($rootScope, $location, SETTINGS) {
        var vm = this;
        var proximoId = 1;

        if ($rootScope.empresas.length > 0) {
            proximoId = $rootScope.empresas[$rootScope.empresas.length - 1].id + 1;
        }

        vm.empresa = {
            id: proximoId,
            nome: '',
            cnpj: ''         
        };
        vm.salvar = salvar;

        activate();

        function activate() {
            
        }

   
        function salvar() {
            toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> cadastrado com sucesso', 'Empresa Cadastrada');
            $rootScope.empresas.push(vm.empresa);
            localStorage.removeItem(SETTINGS.EMPRESAS);
            localStorage.setItem(SETTINGS.EMPRESAS, angular.toJson($rootScope.empresas));
            $location.path('/empresas');            
        }        
    };
})();