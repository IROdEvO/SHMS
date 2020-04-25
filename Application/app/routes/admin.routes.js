module.exports = app =>{
    const admins = require('../controllers/admin.controller.js');

    app.post('/admins', admins.create);

    app.get('/admins', admins.findAll);

    app.get('/admins/:nic', admins.findOne);

    app.put('/admins/:nic', admins.update);

    app.delete('/admins/:nic', admins.delete);

    app.delete('/admins',admins.deleteAll);
}