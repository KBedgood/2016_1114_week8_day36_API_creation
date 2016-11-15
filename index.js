const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
     extended: true
}));


let users = [{ name: 'kristie', age: '18', id: '123', likesJS: true }, { name: 'Taco', age: '12', id: '12993', likesJS: true }];

//RETURN aka GET users in array
app.get('/user', function(req, res) {
     res.json(users);
     console.log(users)
})

//ADD aka POST new users
app.post('/user', function(req, res) {
     var newUser = req.body.newUser;
     newUser = JSON.parse(newUser);
     users.push(newUser); // ADD new user to array
     console.log(newUser);
     res.json(users); // RETURN array with new user ADDED
})

//DELETE a user
app.delete('/user', function(req, res) {

});

app.listen(3000, function() {
     console.log('Example app listening on port 3000!')
})
