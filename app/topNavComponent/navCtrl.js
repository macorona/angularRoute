(function () {
      'use strict';

      angular
        .module('myApp')
        .component('navComponent', {
            templateUrl: 'app/topNavComponent/topNav.html',
            controller: navCtrl,
            controllerAs: 'vm'

        });

      function navCtrl() {
         var vm = this;
         $('.modal').modal();
      }

})();
