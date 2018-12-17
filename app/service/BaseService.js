(function() {
    'use strict';
    angular.module('ChamadosFront').service('BaseService', BaseService);
    BaseService.$inject = ['$http'];
    function BaseService($http) {
        var vm = this;
        //functions to build standard urls based on resource name...
        //functions to create custom collection and member routes
        vm.show = function(resourceName, id) {
          return $http.get("http://localhost/ChamadosAPI/api/" + resourceName + "/" + id);
        };
        vm.index = function(resourceName, params) {
          return $http.get("http://localhost/ChamadosAPI/api/" + resourceName + "/", {params: params});
        };

        vm.listar = function(resourceName) {
          return $http.get("http://localhost/ChamadosAPI/api/" + resourceName);
        };
    };
})();