const expres = require('express');

const StationController = require('./controllers/StationController');
const LogController = require('./controllers/LogController');

const router = expres.Router();

//Station routes
router.get('/stations', StationController.index);
router.post('/stations', StationController.store);
router.put('/stations/:station_id', StationController.update);
router.delete('/stations/:station_id', StationController.delete);
 
//Inserir middleware de validação de dados

//Logs routes
router.get('/stations/:station_id/logs', LogController.index);
router.post('/stations/:station_id/logs', LogController.store);
// router.update('/stations/:station_id', LogController.update); Metodo não implementado - sem necessidade
// router.delete('/stations/:station_id', LogController.delete); Metodo não implementado - sem necessidade
module.exports = router;