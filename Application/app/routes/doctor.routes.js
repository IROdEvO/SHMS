module.exports = app =>{
    const doctors = require('../controllers/doctor.controller.js');

    app.post('/doctors', doctors.create);

    app.get('/doctors', doctors.findAll);

    app.get('/doctors/:nic', doctors.findOne);

    app.put('/doctors/:nic', doctors.update);

    app.delete('/doctors/:nic', doctors.delete);

    app.delete('/doctors',doctors.deleteAll);
}