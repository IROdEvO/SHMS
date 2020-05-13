module.exports = app =>{
    const vitalrecords = require('../controllers/vitalrecords.controller.js');

    app.post('/vitalrecords', vitalrecords.create);

    app.get('/vitalrecords/:devid', vitalrecords.findByDeviceID);

    app.get('/vitalrecords',vitalrecords.findAll);

    app.get('/vitalrecords/:devid/latest',vitalrecords.findByDeviceIDLatest);

    app.delete('/vitalrecords/:devid',vitalrecords.deleteAllByDeviceID);

    app.delete('/vitalrecords',vitalrecords.deleteAll);
}