module.exports = app =>{
    const users = require('../controllers/user.controller.js');

    app.post('/users', users.create);

    app.get('/users', users.findAll);

    app.get('/users/:nic', users.findOne);

    app.get('/users/accounttype/:accounttype',users.findAllByAccountType);

    app.put('/users/:_id', users.update);

    app.delete('/users/:nic', users.delete);

    app.delete('/users',users.deleteAll);
}