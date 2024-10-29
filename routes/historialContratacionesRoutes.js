const express = require('express');
const router = express.Router();
const historialController = require('../controllers/historialContratacionesController');
const checkRole = require('../middlewares/checkRole');

router.post('/historial', checkRole(['admin']), historialController.createHistorial);
router.get('/historial', checkRole(['admin']), historialController.getAllHistorial);
router.get('/historial/:id', checkRole(['admin']), historialController.getHistorialById);
router.put('/historial/:id', checkRole(['admin']), historialController.updateHistorial);
router.delete('/historial/:id', checkRole(['admin']), historialController.deleteHistorial);

module.exports = router;
