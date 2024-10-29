module.exports = (sequelize, DataTypes) => {
    const Prenda = sequelize.define('Prenda', {
      id_prenda: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      talla: {
        type: DataTypes.STRING(10),
        allowNull: false
      },
      precio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      color: {
        type: DataTypes.STRING(50),
        allowNull: true
      },
      descripcion: {
        type: DataTypes.STRING(500),
        allowNull: true
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'Prenda',
      timestamps: false
    });
  
    return Prenda;
  };
  