const express = require('express');
const bodyParser = require('body-parser');
const PORT = 3000;
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const databaseConfiguration = require("./config/database.config.js");
const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);

mongoose.connect(databaseConfiguration.url,{
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
    res.json({"message": "Smart Health Monitoring and Alerting System"});
});

require("./app/routes/admin.routes.js")(app);
require("./app/routes/doctor.routes.js")(app);
require("./app/routes/patient.routes.js")(app);
require("./app/routes/medicalrecords.routes.js")(app);
require("./app/routes/logincredentials.routes.js")(app);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port "+PORT);
});