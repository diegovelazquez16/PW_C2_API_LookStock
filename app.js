const express = require('express');
const app = express();

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/empleados', require('./routes/empleados'));
app.use('/api/proveedores', require('./routes/proveedor'));
app.use('/api/prendas', require('./routes/prenda'));
app.use('/api/pedidosProveedores', require('./routes/pedidoProveedor'));
app.use('/api/historialContrataciones', require('./routes/historialContratacionesRoutes'))
app.use('/api/ventas', require('./routes/ventasRoutes'))
module.exports = app;
