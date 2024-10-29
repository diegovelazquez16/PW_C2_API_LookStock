const express = require('express');
const router = express.Router();
const checkRole = require('../middlewares/checkRole');
const empleadoController = require('../controllers/empleadoController');

// Rutas para administradores
router.post('/', checkRole(['admin']), empleadoController.createEmpleado);
router.put('/:id', checkRole(['admin']), empleadoController.updateEmpleado);
router.delete('/:id', checkRole(['admin']), empleadoController.deleteEmpleado);

// Rutas para administradores y empleados
router.get('/', checkRole(['admin', 'empleado']), empleadoController.getAllEmpleados);
router.get('/:id', checkRole(['admin', 'empleado']), empleadoController.getEmpleadoById);

module.exports = router;
