const Station = require('../models/Station');
const Log = require('../models/Log');

module.exports = {
  async index(req, res) {
    const { station_id } = req.params;

    const station = await Station.findByPk(station_id, {
      include: {
        association: 'log'
      }
    });

    if(!station) {
      return res.status(400).send({message: 'Station not found'});
    }

    return res.status(200).send(station.log);
  },

  async store(req, res) {
    try{
      const { station_id } = req.params;
      const {    
        temperature,
        pressure,
        precipitation,
        humidity,
        gustofwind,
        windspeed,
        winddirection,
        solarincidence
      } = req.body;

      const station = await Station.findByPk(station_id);

      if(!station) {
        return res.status(400).send({message: 'Station not found!'});
      }

      const log = await Log.create({
        temperature,
        pressure,
        precipitation,
        humidity,
        gustofwind,
        windspeed,
        winddirection,
        solarincidence,
        station_id
      });

      return res.status(200).send(log);
    } catch (error) {
      console.log(error);

      return res.status(400).send({message: 'Error inserting in database!'});
    }
  },

  async delete(req,res) {
    const { log_id } = req.params;

    await Log.destroy({
      where: {
      id: log_id
    }
    });

    return res.status(200).send({message: 'Station removed successfully!'});
  }
}