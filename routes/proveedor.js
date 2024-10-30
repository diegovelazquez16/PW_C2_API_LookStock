const express = require('express');
const router = express.Router();
const proveedorController = require('../controllers/proveedorController');

router.post('/',  checkRole(['admin']), proveedorController.createProveedor);
router.get('/', checkRole(['admin']), proveedorController.getAllProveedores);
router.get('/:id', checkRole(['admin']), proveedorController.getProveedorById);
router.put('/:id',  checkRole(['admin']), proveedorController.updateProveedor);
router.delete('/:id',  checkRole(['admin']), proveedorController.deleteProveedor);

module.exports = router;
