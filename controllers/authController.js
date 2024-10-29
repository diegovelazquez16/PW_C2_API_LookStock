const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Usuario = require('../models').Usuario;

exports.register = async (req, res) => {
  const { nombres, apellidos, email, pass, rol } = req.body;

  try {
    const usuarioExistente = await Usuario.findOne({ where: { email } });
    if (usuarioExistente) {
      return res.status(400).json({ message: 'El usuario ya existe' });
    }

    const hashedPassword = await bcrypt.hash(pass, 10);

    const nuevoUsuario = await Usuario.create({
      nombres,
      apellidos,
      email,
      pass: hashedPassword,
      rol, 
    });

    res.status(201).json({ message: 'Usuario creado con éxito', usuario: nuevoUsuario });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};

exports.login = async (req, res) => {
  const { email, pass } = req.body;

  try {

    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(pass, usuario.pass);

    if (!isMatch) {
      return res.status(401).json({ message: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: usuario.id, rol: usuario.rol }, 
      process.env.JWT_SECRET,
      { expiresIn: '12h' }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Error en el servidor', error });
  }
};
