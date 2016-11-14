const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors());

app.use( bodyParser.json() );  

app.use(bodyParser.urlencoded({     
  extended: true
})); 

let users = [];


app.get('', function (req, res) {
})


app.post('', function (req, res) {
})

app.delete('', function(req,res) {
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
