const expres = require('express');

const StationController = require('./controllers/StationController');

const router = expres.Router();

router.get('/stations', StationController.index);

router.post('/stations', StationController.store);

router.put('/stations/:station_id', StationController.update);

router.delete('/stations/:station_id', StationController.delete);
 
module.exports = router;