(function() {
          'use strict';


          // The CONTROLLER is always read first – it's like my normal JS file

          // Save all inventory data in an array:
          angular
               .module('localHost')
               .controller('userDetails', function(storage) {

                         let vm = this;

                         let getUser = storage.getUser();

                         getUser.then(function(response) {
                              vm.user = response.data;
                         })

                         vm.addUser = function(user) {
                              let promise = storage.addUser(user);

                              promise.then(function(response) {
                                   vm.user = response.data;

                              });

                         }



                              vm.deleteUser = function(id) {

                                   let promise = storage.deleteUser(id);

                                   promise.then(function(response) {
                                        vm.user = response.data;

                                   });

                              }

                         })

                         
               })();
