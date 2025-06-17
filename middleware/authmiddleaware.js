const passport = require('passport');

const requireAuth = (req, res, next) => {
  passport.authenticate('jwt', { session: false }, (err, user, info) => {
    if (err) return res.status(500).json({ error: 'Error del servidor' });

    if (!user) {
      return res.status(401).json({
        error: 'Token inválido o no proporcionado',
        detalle: info?.message || 'No autorizado'
      });
    }
    next();
  })(req, res, next);
};

module.exports = { requireAuth };