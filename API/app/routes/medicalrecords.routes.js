module.exports = app =>{
    const medicalrecords = require('../controllers/medicalrecords.controller.js');

    app.post('/medicalrecords', medicalrecords.create);

    app.get('/medicalrecords', medicalrecords.findAll);

    app.get('/medicalrecords/patient/:nic', medicalrecords.findByPatientNIC);

    app.get('/medicalrecords/doctor/:nic',medicalrecords.findByDoctorNIC);

    app.get('/medicalrecords/:_id',medicalrecords.findBy_id);

    app.put('/medicalrecords/:_id',medicalrecords.updateBy_id);

    app.delete('/medicalrecords/:_id',medicalrecords.deleteBy_id);

    app.delete('/medicalrecords',medicalrecords.deleteAll);
}