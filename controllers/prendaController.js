const { Prenda } = require('../models');

const createPrenda = async (req, res) => {
  try {
    const prenda = await Prenda.create(req.body);
    res.status(201).json(prenda);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPrendas = async (req, res) => {
  try {
    const prendas = await Prenda.findAll();
    res.status(200).json(prendas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPrendaById = async (req, res) => {
  try {
    const prenda = await Prenda.findByPk(req.params.id);
    if (prenda) {
      res.status(200).json(prenda);
    } else {
      res.status(404).json({ message: 'Prenda no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePrenda = async (req, res) => {
  try {
    const [updated] = await Prenda.update(req.body, {
      where: { id_prenda: req.params.id }
    });
    if (updated) {
      const updatedPrenda = await Prenda.findByPk(req.params.id);
      res.status(200).json(updatedPrenda);
    } else {
      res.status(404).json({ message: 'Prenda no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePrenda = async (req, res) => {
  try {
    const deleted = await Prenda.destroy({
      where: { id_prenda: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Prenda eliminada' });
    } else {
      res.status(404).json({ message: 'Prenda no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPrenda,
  getAllPrendas,
  getPrendaById,
  updatePrenda,
  deletePrenda
};
