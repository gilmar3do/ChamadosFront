(function () {
    'use strict';

    angular.module('ChamadosFront').constant('SETTINGS', {
        "EMPRESAS": "empresas"
    });

    angular.module('ChamadosFront').run(function ($rootScope, SETTINGS) {
        /*var empresas = localStorage.getItem(SETTINGS.EMPRESAS);
        /*$scope.add = function(){
            $http.get($scope.url).then(function(response) {
                      $scope.newMessage = response.data.queries.request.totalResults;
                      $scope.messages.push($scope.newMessage);
            });
        };*/

     /*   $rootScope.empresas = [];
        
        if (empresas) {
            var items = angular.fromJson(empresas);
            angular.forEach(items, function (value) {
                $rootScope.empresas.push(value);
            });
        }
*/
    });

})();