module.exports = (sequelize, DataTypes) => {
    const PedidoProveedor = sequelize.define('PedidoProveedor', {
      id_pedido_proveedor: {
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
      id_proveedor: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Proveedor', 
          key: 'id_proveedor'
        }
      },
      id_prenda: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Prenda', 
          key: 'id_prenda'
        }
      },
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      precio_unitario: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      fecha_pedido: {
        type: DataTypes.DATE,
        allowNull: false
      },
      fecha_entrega: {
        type: DataTypes.DATE,
        allowNull: true
      }
    }, {
      tableName: 'PedidoProveedor',
      timestamps: false
    });
  
    PedidoProveedor.associate = function(models) {
      PedidoProveedor.belongsTo(models.Empleado, { foreignKey: 'id_empleado' });
      PedidoProveedor.belongsTo(models.Proveedor, { foreignKey: 'id_proveedor' });
      PedidoProveedor.belongsTo(models.Prenda, { foreignKey: 'id_prenda' });
    };
  
    return PedidoProveedor;
  };
  