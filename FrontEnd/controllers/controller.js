(function() {
        'use strict';


        // The CONTROLLER is always read first – it's like my normal JS file

        // Save all inventory data in an array:
        angular
            .module('localHost')
            .controller('userDetails', function LocalHostController(details) {

                let newUser = {
                    name: user.name,
                    age: user.age,
                    id: date(now),
                    likesJS: 

                }

                // Pushes User Info Onto Object On Submit
                vm.submit = function(newUser) {
                    vm.form = {};
                    vm.items = details.addData(newItem);
                }

                vm.items =  details.getData();

            });
})();