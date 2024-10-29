const { Proveedor } = require('../models');

const createProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.create(req.body);
    res.status(201).json(proveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.status(200).json(proveedores);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (proveedor) {
      res.status(200).json(proveedor);
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateProveedor = async (req, res) => {
  try {
    const [updated] = await Proveedor.update(req.body, {
      where: { id_proveedor: req.params.id }
    });
    if (updated) {
      const updatedProveedor = await Proveedor.findByPk(req.params.id);
      res.status(200).json(updatedProveedor);
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteProveedor = async (req, res) => {
  try {
    const deleted = await Proveedor.destroy({
      where: { id_proveedor: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Proveedor eliminado' });
    } else {
      res.status(404).json({ message: 'Proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createProveedor,
  getAllProveedores,
  getProveedorById,
  updateProveedor,
  deleteProveedor
};
