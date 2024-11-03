const express = require('express');
const router = express.Router();
const prendaController = require('../controllers/prendaController');
const checkRole = require('../middlewares/checkRole'); 


router.post('/', checkRole(['admin', 'empleado']), prendaController.createPrenda);
router.get('/', checkRole(['admin', 'empleado']), prendaController.getAllPrendas);
router.get('/:id', checkRole(['admin', 'empleado']), prendaController.getPrendaById);
router.put('/:id', checkRole(['admin', 'empleado']), prendaController.updatePrenda);
router.delete('/:id',checkRole(['admin', 'empleado']), prendaController.deletePrenda);

module.exports = router;
