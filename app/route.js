(function () {
    'use strict'

    config.$inject = ['$routeProvider'];
    function config($routeProvider) {
        $routeProvider
        .when('/home', {
            template: '<inicio-component></inicio-component>',
            controllerAs: 'vm'

        })

        .when('/character', {
            template: '<personajes-component></personajes-component>',
            controllerAs: 'vm'

        })

        .when('/episodios', {
            template: '<episodios-component></episodios-component>',
            controllerAs: 'vm'

        })

        .otherwise({
            redirectTo: '/home'
        });



    }
    angular
    .module('myApp')
    .config(config);

})();
