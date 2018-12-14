(function() {
    'use strict';
    angular.module('ChamadosFront').service('BaseService', BaseService);
    BaseService.$inject = ['$http'];
    function BaseService($http) {
        var vm = this;
        //functions to build standard urls based on resource name...
        //functions to create custom collection and member routes
        vm.show = function(resourceName, id) {
          return $http.get("http://localhost/ChamadosAPI/api/" + resourceName + "/" + id)
          .then(function(response) {
            return response.data.records;
          });
        };
        vm.index = function(resourceName, params) {
          return $http.get("http://localhost/ChamadosAPI/api/" + resourceName + "/", {params: params})
          .then(function(response) {
            return response.data.records;
          });
        };

        vm.listar = function(resourceName) {
          return $http.get("http://localhost/ChamadosAPI/api/" + resourceName)
          .then(function(response) {
              console.log('Fiz alguma coisa: '+ response.data.records);
            return response.data.records;
          })
          .catch(function(error) {
              //Do stuff if the call returned an error
              console.log('Fiz alguma coisa Errado');
          });
          /*.finally(function() {
            //Do stuff regardless of call's success or failure
            console.log('Fiz alguma coisa final');
          });*/
        };
        
        /*var xy = this;
 
         //
         xy.fazerAlgumaCoisa = fazerAlgumaCoisa;
 
         //Implementação das funções
         function fazerAlgumaCoisa() {
           console.log('Fiz alguma coisa');
         }*/
    }
})();