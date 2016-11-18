(function() {
     'use strict';

     angular
          .module('localHost')
          .factory('storage', function($http) {

               const getUser = function() { //const because they are not going to change vs. var
                    var promise = $http({
                         method: 'GET',
                         url: 'http://localhost:3009/user'
                    });
                    return promise;
               }

               const addUser = function(user) {

                    let obj2 = {
                         newUser: user,
                    }
                    console.log(obj2);
                    var promise = $http({
                         method: 'POST',
                         data: obj2,
                         url: 'http://localhost:3009/user'
                    });
                    return promise;
               }

               const deleteUser = function(id) {
                    let obj = {
                         id: id
                    };
                    var promise = $http({
                         method: 'POST',
                         data: obj,
                         url: 'http://localhost:3009/user/delete'
                    });
                    return promise;
               }

               // expose to use
               return {
                    getUser,
                    addUser,
                    deleteUser

               }

          });

})();
