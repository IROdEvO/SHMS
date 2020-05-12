const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
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


app.get('/', (req, res) => {
   res.json({"message": "SHMS Server"});
});
 
require("./app/routes/user.routes.js")(app);
require("./app/routes/medicalrecords.routes.js")(app);
require("./app/routes/vitalrecords.routes.js")(app);


app.listen(PORT, () => {
    console.log("Server is listening on port "+PORT);
});