// models/historialContrataciones.js
module.exports = (sequelize, DataTypes) => {
    const HistorialContrataciones = sequelize.define('HistorialContrataciones', {
      id_historial: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_empleado: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Empleado',
          key: 'id_empleado'
        }
      },
      fechaCambio: {
        type: DataTypes.DATE,
        allowNull: false
      },
      salarioAnterior: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      nuevoSalario: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }, {
      tableName: 'HistorialContrataciones',
      timestamps: false
    });
  
    HistorialContrataciones.associate = (models) => {
      HistorialContrataciones.belongsTo(models.Empleado, {
        foreignKey: 'id_empleado',
        onDelete: 'CASCADE'
      });
    };
  
    return HistorialContrataciones;
  };
  