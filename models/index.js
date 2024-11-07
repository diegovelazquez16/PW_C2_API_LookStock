const Sequelize = require('sequelize');
const config = require('../config/config.json');
const sequelize = new Sequelize(
'lookstock', // esto lo cambian por el nombre de la db vacia que crearon en mysql
  'admin',
  'lookStock15', //esta es la contraseña de mysql
  {
    host:"database-1.c16y4kge6k6a.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    logging: console.log,  // Esto imprimirá todas las consultas SQL en la consola
  }
);

const db = {};
db.ORM = Sequelize;
db.connection = sequelize;

// Importar modelos
db.Empleado = require('./empleado')(sequelize, Sequelize);
db.Proveedor = require('./proveedor')(sequelize, Sequelize);
db.Prenda = require('./prenda')(sequelize, Sequelize);
db.PedidoProveedor = require('./pedidoProveedor')(sequelize, Sequelize);
db.Usuario = require('./Usuario')(sequelize, Sequelize);
db.HistorialContrataciones = require('./historialContrataciones')(sequelize, Sequelize);

module.exports = db;
