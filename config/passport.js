const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const dotenv = require('dotenv');
dotenv.config(); // Carga variables desde .env

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // <== TOKEN desde header
  secretOrKey: process.env.JWT_SECRET
};

const configurePassport = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      return done(null, jwt_payload); // El payload será accesible como req.user
    })
  );
};

module.exports = configurePassport;
