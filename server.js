require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var UserController = require('./controllers/user');
var ProjectController = require('./controllers/project');
var StepController = require('./controllers/step');

const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI); //mongodb://localhost/make-it-yourself

const connection = mongoose.connection;
connection.on('connected', () => {
  console.log('Mongoose Connected Successfully');    
}); 

// If the connection throws an error
connection.on('error', (err) => {  
  console.log('Mongoose connection error: ' + err);
}); 

app.use(bodyParser.json());
app.use(express.static(__dirname + '/client/build/'));

app.use('/api/user', UserController);
app.use('/api/user/:userId/', ProjectController);
app.use('/api/user/:userId/project/:projectId', StepController);

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/client/build/index.html')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})