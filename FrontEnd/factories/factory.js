(function() {
     'use strict';

     angular
          .module('localHost')
          .factory('storage', function($http) {

               var getUser = function() {
                    var promise = $http({
                         method: 'GET',
                         url: 'https//localhost:3000/user'
                    });
                    return promise;
               }

               var addUser = function($http) {
                    var promise = $http({
                         method: 'POST',
                         url: 'https//localhost:3000/user'
                    });
                    return promise;
               }

               // expose to use
               return {
                    getUser,
                    addUser

               }

          });

})();
