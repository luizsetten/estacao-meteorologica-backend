const Station = require('../models/Station');

class StationController {
  async index(req,res) {
    try {
      const stations = await Station.findAll;

      return res.json(stations);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async show(req, res) {}

  async store(req, res) {
    try {
      const station = await Station.create(req.body);
      return res.json(station);
    } catch (error) {
      return res.status(400).json({ error: error.message });
      
    }
  }

  async update(req, res) {}

  async delete(req, res) {}

}

module.exports = new StationController();