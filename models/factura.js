module.exports = (sequelize, DataTypes) => {
    const Factura = sequelize.define('Factura', {
        id_factura: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        id_venta: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Venta',  
                key: 'id_venta'  
            }
        },
        fecha: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        },
        cliente: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        estado: {
            type: DataTypes.ENUM('Pendiente', 'Pagado', 'Cancelado'),
            defaultValue: 'Pendiente'
        }
    }, {
        tableName: 'Factura',
        timestamps: false
    });

    Factura.belongsTo(sequelize.models.Venta, {
        foreignKey: 'id_venta',
        as: 'Venta'  
    });

    return Factura;
};
