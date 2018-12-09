(function () {
    'use strict';

    angular.module('ChamadosFront').config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'paginas/home/index.html'
            })
            .when('/empresas', {
                controller: 'EmpresaListagemController',
                controllerAs: 'vm',
                templateUrl: 'paginas/empresa/empresa_listagem.html'
            })
            .when('/empresas/inclusao', {
                controller: 'EmpresaInclusaoController',
                controllerAs: 'vm',
                templateUrl: 'paginas/empresa/empresa_inclusao.html'
            })
            .when('/empresas/alteracao/:id', {
                controller: 'EmpresaAlteracaoController',
                controllerAs: 'vm',
                templateUrl: 'paginas/empresa/empresa_alteracao.html'
            })
            .when('/empresas/exclusao/:id', {
                controller: 'EmpresaExclusaoController',
                controllerAs: 'vm',
                templateUrl: 'paginas/empresa/empresa_alteracao.html'
            });
    });
})();