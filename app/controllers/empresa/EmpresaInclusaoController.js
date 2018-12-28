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
            toastr.success('Teste <strong>' + vm.empresa.nome + '</strong> valor id: '+id, 'Empresa Alterada');
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
            /*toastr.success('Empresa <strong>' + vm.empresa.nome + '</strong> cadastrado com sucesso', 'Empresa Cadastrada');
            $rootScope.empresas.push(vm.empresa);
            localStorage.removeItem(SETTINGS.EMPRESAS);
            localStorage.setItem(SETTINGS.EMPRESAS, angular.toJson($rootScope.empresas));*/
            $location.path('/empresas');      
        }        
    };
})();