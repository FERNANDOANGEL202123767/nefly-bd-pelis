const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  const url = process.env.MONGO_URI;
  try {
    await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Conectado a la Base de Datos <3');
  } catch (err) {
    console.error('Error al conectarse a la Base de Datos </3', err);
  }
};

module.exports = connectDB;