const express = require('express');
const router = express.Router();
const ventaController = require('../controllers/ventaController');
const checkRole = require('../middlewares/checkRole'); 
router.post('/ventas', checkRole(['admin']), ventaController.createVenta);
router.get('/ventas', checkRole(['admin', 'empleado']), ventaController.getAllVentas);
router.get('/ventas/:id', checkRole(['admin', 'empleado']), ventaController.getVentaById);
router.put('/ventas/:id', checkRole(['admin']), ventaController.updateEstadoVenta);

module.exports = router;
