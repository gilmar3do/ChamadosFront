(function () {
    'use strict';

    angular.module('ChamadosFront').constant('SETTINGS', {
        "EMPRESAS": "empresas"
    });

    angular.module('ChamadosFront').run(function ($rootScope, SETTINGS) {
        var empresas = localStorage.getItem(SETTINGS.EMPRESAS);

        $rootScope.empresas = [];
        
        if (empresas) {
            var items = angular.fromJson(empresas);
            angular.forEach(items, function (value) {
                $rootScope.empresas.push(value);
            });
        }

    });

})();