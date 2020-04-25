const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());

const dbconfig = require("./config/db.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false);

mongoose.connect(dbconfig.url,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
    console.log("Connected successfully");
}).catch((err)=>{
    console.log("Connection failed ",err);
    process.exit();
});

// define a simple route 
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});

require("./app/routes/note.routes.js")(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port "+PORT);
});