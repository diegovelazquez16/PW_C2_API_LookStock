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
      const prendaId = req.params.id;
      console.log("Obteniendo prenda con ID:", prendaId); 
      const prenda = await Prenda.findByPk(prendaId);
      
      if (prenda) {
          res.status(200).json(prenda);
      } else {
          console.log("Prenda no encontrada con ID:", prendaId); 
          res.status(404).json({ message: 'Prenda no encontrada' });
      }
  } catch (error) {
      console.error("Error en getPrendaById:", error.message); 
      res.status(500).json({ error: error.message });
  }
};

const updatePrenda = async (req, res) => {
    try {
        const prenda = await Prenda.findByPk(req.params.id);
        if (prenda) {
            await prenda.update(req.body);
            res.status(200).json(prenda);
        } else {
            res.status(404).json({ message: 'Prenda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deletePrenda = async (req, res) => {
  try {
      const prendaId = req.params.id;
      console.log("Eliminando prenda con ID:", prendaId); 
      const deleted = await Prenda.destroy({
          where: { id_prenda: prendaId }
      });
      
      if (deleted) {
          console.log("Prenda eliminada correctamente."); 
          res.status(204).json({ message: 'Prenda eliminada' });
      } else {
          console.log("Prenda no encontrada para eliminar con ID:", prendaId); 
          res.status(404).json({ message: 'Prenda no encontrada' });
      }
  } catch (error) {
      console.error("Error en deletePrenda:", error.message);
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
