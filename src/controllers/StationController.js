const Station = require('../models/Station');

module.exports = {
  async index(req,res) {
    const stations = await Station.findAll();

    if(stations === '' || stations === null) {
      return res.status(200).send({ message: 'Nenhuma estação cadastrada'});
    }

    return res.status(200).send({ stations });
  },

  async store(req,res) {
    const {  name, latitude, longitude, city, uf, token } = req.body;

    const station = await Station.create({  name, latitude, longitude, city, uf, token });

    return res.status(200).send(station);
  },

  async update(req,res) {
    const {  name, latitude, longitude, city, uf, token } = req.body;
    const { station_id } = req.params;

    await Station.update({
      name, latitude, longitude, city, uf, token
    }, {
      where: {
        id: station_id
      }
    });

    return res.status(200).send({message: 'Station info updated successfully!'});

  },

  async delete(req,res) {
    const { station_id } = req.params;

    await Station.destroy({
      where: {
      id: station_id
    }
    });

    return res.status(200).send({message: 'Station removed successfully!'});
  }

};