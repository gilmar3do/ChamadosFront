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
                        $location.path('/empresas');
                    })
                    .catch(function(error) {
                        //Do stuff if the call returned an error
                        console.log('Fiz alguma coisa Errada');
                        return error;
                    });
                    
                }
            });
        }
    };
})();