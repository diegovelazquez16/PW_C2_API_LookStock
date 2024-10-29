const { Empleado } = require('../models');

const createEmpleado = async (req, res) => {
  try {
    const empleado = await Empleado.create(req.body);
    res.status(201).json(empleado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.findAll();
    res.status(200).json(empleados);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getEmpleadoById = async (req, res) => {
  try {
    const empleado = await Empleado.findByPk(req.params.id);
    if (empleado) {
      res.status(200).json(empleado);
    } else {
      res.status(404).json({ message: 'Empleado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateEmpleado = async (req, res) => {
  try {
    const { nombres, apellidos, direccion, telefono, salario, fechaContratacion, estado } = req.body;

    const [updated] = await Empleado.update(
      { nombres, apellidos, direccion, telefono, salario, fechaContratacion, estado },
      {
        where: { id_empleado: req.params.id }
      }
    );

    if (updated) {
      const updatedEmpleado = await Empleado.findByPk(req.params.id);
      res.status(200).json(updatedEmpleado);
    } else {
      res.status(404).json({ message: 'Empleado no encontrado' });
    }
  } catch (error) {
    console.error(error); 
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};

const deleteEmpleado = async (req, res) => {
  try {
    const deleted = await Empleado.destroy({
      where: { id_empleado: req.params.id }
    });
    if (deleted) {
      res.status(204).json({ message: 'Empleado eliminado' });
    } else {
      res.status(404).json({ message: 'Empleado no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createEmpleado,
  getAllEmpleados,
  getEmpleadoById,
  updateEmpleado,
  deleteEmpleado
};
