(function() {
          'use strict';


          // The CONTROLLER is always read first – it's like my normal JS file

          // Save all inventory data in an array:
          angular
               .module('localHost')
               .controller('userDetails', function($http) {

                         let vm = this;

                         letgetUser = userDetails.getUser();
                         getUser.then(function(response) {
                                   vm.user = response.data;
                              }

                              vm.addUser = function(user)
                                   let newUser = API.addUser(user);
                                   
                                   promise.then(function(response) {
                                vm.user = response.data;

                                        })
                                        // name: user.name,
                                        // age: user.age,
                                        // id: Date.now(),
                                        // likesJS: 
                              }

                              // Pushes User Info Onto Object On Submit
                              vm.submit = function(newUser) {
                                   vm.form = {};
                                   vm.items = details.addData(newItem);
                              }

                              vm.items = details.getData();

                         });
               })();
