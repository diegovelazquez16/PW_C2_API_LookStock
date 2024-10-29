const { HistorialContrataciones } = require('../models');

const createHistorial = async (req, res) => {
  try {
    const historial = await HistorialContrataciones.create(req.body);
    res.status(201).json(historial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllHistorial = async (req, res) => {
  try {
    const historial = await HistorialContrataciones.findAll();
    res.status(200).json(historial);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getHistorialById = async (req, res) => {
  try {
    const historial = await HistorialContrataciones.findByPk(req.params.id);
    if (historial) {
      res.status(200).json(historial);
    } else {
      res.status(404).json({ message: 'Registro de historial no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateHistorial = async (req, res) => {
  try {
    const [updated] = await HistorialContrataciones.update(req.body, {
      where: { id_historial: req.params.id }
    });
    
    if (updated) {
      const updatedHistorial = await HistorialContrataciones.findByPk(req.params.id);
      res.status(200).json(updatedHistorial);
    } else {
      res.status(404).json({ message: 'Registro de historial no encontrado' });
    }
  } catch (error) {
    console.error(error);  
    res.status(500).json({ error: 'Error al actualizar el historial' });
  }
};

const deleteHistorial = async (req, res) => {
  try {
    const deleted = await HistorialContrataciones.destroy({
      where: { id_historial: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Registro de historial eliminado' });
    } else {
      res.status(404).json({ message: 'Registro de historial no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createHistorial,
  getAllHistorial,
  getHistorialById,
  updateHistorial,
  deleteHistorial
};
