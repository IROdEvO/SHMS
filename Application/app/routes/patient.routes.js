module.exports = app =>{
    const patients = require('../controllers/patient.controller.js');

    app.post('/patients', patients.create);

    app.get('/patients', patients.findAll);

    app.get('/patients/:nic', patients.findOne);

    app.put('/patients/:nic', patients.update);

    app.delete('/patients/:nic', patients.delete);

    app.delete('/patients',patients.deleteAll);
}