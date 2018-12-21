(function () {
    'use strict';
    angular.module('ChamadosFront').controller('EmpresaInclusaoController', EmpresaInclusaoController);

    EmpresaInclusaoController.$inject = ['$rootScope', '$location', 'SETTINGS', 'BaseService'];

    function EmpresaInclusaoController($rootScope, $location, SETTINGS, BaseService) {
        var vm = this;

        vm.empresa = {
            id: '',
            nome: '',
            cnpj: ''         
        };
        vm.salvar = salvar;

        activate();

        function activate() {
            
        }

   
        function salvar() {
            
            vm.empresa = BaseService.add("empresa/Read.php")
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
            /*toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> cadastrado com sucesso', 'Empresa Cadastrada');
            $rootScope.empresas.push(vm.empresa);
            localStorage.removeItem(SETTINGS.EMPRESAS);
            localStorage.setItem(SETTINGS.EMPRESAS, angular.toJson($rootScope.empresas));
            $location.path('/empresas');  */          
        }        
    };
})();