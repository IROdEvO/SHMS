module.exports = app =>{
    const users = require('../controllers/user.controller.js');

    app.post('/users', users.create);

    app.get('/users', users.findAll);

    app.get('/users/:nic', users.findOne);

    app.put('/users/:nic', users.update);

    app.delete('/users/:nic', users.delete);

    app.delete('/users',users.deleteAll);
}