module.exports = (sequelize, DataTypes) => {
    const Proveedor = sequelize.define('Proveedor', {
      id_proveedor: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombres: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      apellidos: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      telefono: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      direccion: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    }, {
      tableName: 'Proveedor',
      timestamps: false
    });
  
    return Proveedor;
  };
  