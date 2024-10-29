const jwt = require('jsonwebtoken'); 

const checkRole = (roles) => {
  return (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; 
    if (!token) {
      return res.status(401).json({ message: 'No hay token de autenticación' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return res.status(403).json({ message: 'Token no válido' });
      }

      if (!roles.includes(decoded.rol)) {
        return res.status(403).json({ message: 'No tienes permisos para realizar esta acción' });
      }

      req.user = decoded; 
      next();
    });
  };
};

module.exports = checkRole;
