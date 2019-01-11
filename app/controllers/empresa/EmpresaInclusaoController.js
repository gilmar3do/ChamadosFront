(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaInclusaoController', EmpresaInclusaoController);

    EmpresaInclusaoController.$inject = ['$rootScope', '$routeParams', '$location', 'SETTINGS', 'BaseService'];

    function EmpresaInclusaoController($rootScope, $routeParams, $location, SETTINGS, BaseService) {
        var vm = this;
        var id = $routeParams.id;

        vm.empresa = {
            nome: '',
            cnpj: ''         
        };
        vm.salvar = salvar;

        activate();

        function activate() {
            if(id){
                listarEmpresa();
            }
        }
        
        function listarEmpresa() {
            angular.forEach($rootScope.empresas, function (value, key) {
                if (value.id === id) 
                {
                    vm.empresa = value;
                }
            });
        }

   
        function salvar() {
            vm.empresa = BaseService.post("empresa/Save.php", angular.toJson(vm.empresa))
            .then(function(response) {
                if(id){
                    toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> alterada com sucesso', 'Empresa Alterada');
                }else{
                    toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> cadastrado com sucesso', 'Empresa Cadastrada');
                }
                $location.path('/empresas'); 
            })
            .catch(function(error) {
                //Do stuff if the call returned an error
                toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> Erro na inclusão', 'Empresa Não Cadastrada');
                return error;
            }); 
        }        
    };
})();