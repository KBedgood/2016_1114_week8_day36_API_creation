const express     = require('express') // server
const app         = express() // app is using express
const cors        = require('cors')
const bodyParser  = require('body-parser')
const User        = require('./models/user');

// grab the user model
var mongoose = require('mongoose'); // database
mongoose.connect('mongodb://KBedgood:test@ds155727.mlab.com:55727/kbtest');

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
     extended: true
}));


// RETURN aka GET users in array in JSON string
app.get('/user', function(req, res) {
     User.
     find().
     exec(function(err, response){
      res.json(response);

     });
})

let counter = 0;

// create a new user
// ADD aka POST new users
// Anytime you are trying to get something out of the request use .body (example: inside Postman)
app.post('/user', function(req, res) {

     var newUser = req.body.newUser;
     console.log("test", newUser);

     var user = new User({ name: newUser.name, age: newUser.age, likesJS: newUser.likesJS });

     user.save(function(err) {
          if (err) {
               console.log(err);
          } else {
               User.
               find().
               exec(function(err, response){
                res.json(response);
               });
          }
     });

     // users.push(newUser); // ADD new user to array
     // res.json(users); // RETURN array with new user ADDED
})

//DELETE a user
app.post('/user/delete', function(req, res) {
  let obj = req.body.id;
  console.log(obj);
// get the user 
User.findByIdAndRemove(obj, function(err,user) {
  if (err) throw err;
 User.
               find().
               exec(function(err, response){
                res.json(response);
               });

  
 
});
});



// app.post('/user/delete', function(req, res) {

//      let id = req.body.id; //find the id it was sending over out of the params – id can be taco: name it whatever you want to name it

//      id = parseInt(id); //converts a string to an integer
//      let spotInArray = null;

//      users.forEach(function(item, index) { //loop through each user to see if id of user matches the user we were looking for
//           if (item.id == id) {
//                spotInArray = index;
//           }
//      })
//      users.splice(spotInArray, 1) //removes matching user from the array
//      res.json(users); //returns the updated array
// });

app.listen(3009, function() {
     console.log('Example app listening on port 3009!')
})
