const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombres: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    apellidos: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
    },
    pass: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    rol: {
      type: DataTypes.ENUM('admin', 'empleado'),
      allowNull: false,
      defaultValue: 'empleado',
    },
  }, {
    tableName: 'Usuarios',
    timestamps: false, // Evita que Sequelize añada `createdAt` y `updatedAt`
  });

  return Usuario;
};
