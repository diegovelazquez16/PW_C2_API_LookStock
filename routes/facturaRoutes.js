const express = require('express');
const router = express.Router();
const facturaController = require('../controllers/facturaController');
const checkRole = require('../middlewares/checkRole'); 

router.post('/facturas', checkRole(['admin']), facturaController.createFactura);
router.get('/facturas', checkRole(['admin', 'empleado']), facturaController.getAllFacturas);
router.get('/facturas/:id', checkRole(['admin', 'empleado']), facturaController.getFacturaById);
router.put('/facturas/:id', checkRole(['admin']), facturaController.updateFactura);


module.exports = router;
