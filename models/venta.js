module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define('Venta', {
        id_venta: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
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
        estado: {
            type: DataTypes.ENUM('Pendiente', 'Pagado', 'Cancelado'),
            allowNull: false,
            defaultValue: 'Pendiente'
        },
        fechaVenta: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        }
    }, {
        tableName: 'Ventas',
        timestamps: false
    });

    Venta.belongsTo(sequelize.models.Prenda, {
        foreignKey: 'id_prenda',
        onDelete: 'CASCADE'
    });
    return Venta;
};