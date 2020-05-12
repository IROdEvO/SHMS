const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const request = require("request");
const path = require("path");
const fetch = require("node-fetch");
const PORT = 3000;
var http = require("http");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/',(req,res)=>{

    request.get("http://localhost:5000/medicalrecords", (error, response, body) => {
        if(error) {
            return console.dir(error);
        }
        console.dir(JSON.parse(body));
        res.send(body);
    });
});
 app.get('/medicalrecords', function(req, res, next) {
    var url = 'http://localhost:5000/medicalrecords';
     
    fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
  });

app.listen(PORT, () => {
    console.log("Server is listening on port "+PORT);
});