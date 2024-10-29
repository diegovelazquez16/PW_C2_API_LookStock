const express = require('express');
const router = express.Router();
const prendaController = require('../controllers/prendaController');

router.post('/', prendaController.createPrenda);
router.get('/', prendaController.getAllPrendas);
router.get('/:id', prendaController.getPrendaById);
router.put('/:id', prendaController.updatePrenda);
router.delete('/:id', prendaController.deletePrenda);

module.exports = router;
