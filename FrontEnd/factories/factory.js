(function() {
     'use strict';

     angular
          .module('localHost')
          .factory('storage', function($http) {

               const getUser = function() { //const because they are not going to change vs. var
                    var promise = $http({
                         method: 'GET',
                         url: 'https://localhost:3000/user'
                    });
                    return promise;
               }

               const addUser = function(user) {

                    let obj = {
                         user: user,
                    }
                    var promise = $http({
                         method: 'POST',
                         url: 'https://localhost:3000/user'
                    });
                    return promise;
               }

               const deleteUser = function(id) {
                    let obj = {
                         taco: id
                    };
                    var promise = $http({
                         method: 'DELETE',
                         data: obj,
                         url: 'https://localhost:3000/user'
                    });
               }

               // expose to use
               return {
                    getUser,
                    addUser,
                    deleteUser

               }

          });

})();
