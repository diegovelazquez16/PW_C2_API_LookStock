module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('Empleado', {
    id_empleado: {
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
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    salario: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    fechaContratacion: {
      type: DataTypes.DATE,
      allowNull: false
    },
    estado: {
      type: DataTypes.ENUM('En nomina', 'Fuera de nomina'),
      allowNull: false,
      defaultValue: 'En nomina'
    }
  }, {
    tableName: 'Empleado',
    timestamps: false
  });

  Empleado.associate = (models) => {
    Empleado.hasMany(models.HistorialContrataciones, {
      foreignKey: 'id_empleado',
      onDelete: 'CASCADE'
    });
  };

  return Empleado;
};
