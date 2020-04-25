module.exports = app =>{
    const logincredentials = require('../controllers/logincredentials.controller.js');

    app.post('/logincredentials', logincredentials.create);

    app.get('/logincredentials', logincredentials.findAll);

    app.get('/logincredentials/:nic', logincredentials.findOne);
 
    app.put('/logincredentials/:nic', logincredentials.update);

    app.delete('/logincredentials/:nic', logincredentials.delete);

    app.delete('/logincredentials',logincredentials.deleteAll);
}