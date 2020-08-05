const Router = require('express');
const StationController = require('./app/controllers/StationController');

const routes = Router();

routes.get('/stations', StationController.index);

routes.get('/stations:id', StationController.show);

routes.post('/stations', StationController.store);

routes.put('/stations/:id', StationController.update);

routes.delete('/stations/:id', StationController.delete);

module.exports = routes;