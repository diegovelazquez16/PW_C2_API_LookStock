const express = require('express');
const cors = require('cors');
const http = require('http');
require('dotenv').config();
const empleadoRoutes = require('./routes/empleados');
const historialRoutes = require('./routes/historialContratacionesRoutes');
const proveedorRoutes = require('./routes/proveedor');
const prendaRoutes = require('./routes/prenda');
const pedidoProveedorRoutes = require('./routes/pedidoProveedor');
const authRoutes = require('./routes/authRoutes'); 
const ventasRoutes = require('./routes/ventasRoutes');
const facturaRoutes = require('./routes/facturaRoutes'); 


const {connection} = require('./models');
const PORT = 3000;


const app = express();

// Configurar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api/empleados', empleadoRoutes);
app.use('/api', historialRoutes); 
app.use('/api/proveedores', proveedorRoutes);
app.use('/api/prendas', prendaRoutes);
app.use('/api/pedidosProveedores', pedidoProveedorRoutes);
app.use('/api/auth', authRoutes);
app.use('/api', ventasRoutes);
app.use('/api', facturaRoutes);  


connection.sync() // Sincroniza los modelos con la base de datos
  .then(() => {
    console.log('Conexión con la base de datos exitosa y modelos sincronizados.');
    const server = http.createServer(app);
    server.listen(PORT, () => {
      console.log(`Servidor corriendo en el puerto ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error al sincronizar con la base de datos:', error);
  });

module.exports = app;
