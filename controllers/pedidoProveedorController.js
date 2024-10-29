const { PedidoProveedor } = require('../models');

const createPedidoProveedor = async (req, res) => {
  try {
    const pedidoProveedor = await PedidoProveedor.create(req.body);
    res.status(201).json(pedidoProveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPedidosProveedor = async (req, res) => {
  try {
    const pedidosProveedor = await PedidoProveedor.findAll();
    res.status(200).json(pedidosProveedor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getPedidoProveedorById = async (req, res) => {
  try {
    const pedidoProveedor = await PedidoProveedor.findByPk(req.params.id);
    if (pedidoProveedor) {
      res.status(200).json(pedidoProveedor);
    } else {
      res.status(404).json({ message: 'Pedido a proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updatePedidoProveedor = async (req, res) => {
  try {
    const [updated] = await PedidoProveedor.update(req.body, {
      where: { id_pedido_proveedor: req.params.id }
    });
    if (updated) {
      const updatedPedidoProveedor = await PedidoProveedor.findByPk(req.params.id);
      res.status(200).json(updatedPedidoProveedor);
    } else {
      res.status(404).json({ message: 'Pedido a proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deletePedidoProveedor = async (req, res) => {
  try {
    const deleted = await PedidoProveedor.destroy({
      where: { id_pedido_proveedor: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Pedido a proveedor eliminado' });
    } else {
      res.status(404).json({ message: 'Pedido a proveedor no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createPedidoProveedor,
  getAllPedidosProveedor,
  getPedidoProveedorById,
  updatePedidoProveedor,
  deletePedidoProveedor
};
