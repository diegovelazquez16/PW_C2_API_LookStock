const express = require('express');
const router = express.Router();
const pedidoProveedorController = require('../controllers/pedidoProveedorController');

router.post('/', pedidoProveedorController.createPedidoProveedor);
router.get('/', pedidoProveedorController.getAllPedidosProveedor);
router.get('/:id', pedidoProveedorController.getPedidoProveedorById);
router.put('/:id', pedidoProveedorController.updatePedidoProveedor);
router.delete('/:id', pedidoProveedorController.deletePedidoProveedor);

module.exports = router;
