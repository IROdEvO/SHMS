module.exports = app =>{
    const vitalrecords = require('../controllers/vitalrecords.controller.js');

    app.post('/vitalrecords', vitalrecords.create);

    app.get('/vitalrecords/:devid', vitalrecords.findByDeviceID);

    app.delete('/vitalrecords/:devid',vitalrecords.deleteAllByDeviceID);
}