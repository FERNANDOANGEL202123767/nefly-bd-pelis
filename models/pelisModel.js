const mongoose = require('mongoose');

const pelisSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: { type: String, required: true },
  duracion: { type: String, required: false, default: 'Desconocida' },
  url_video: { type: String, required: false },
  drive_file_id: { type: String, required: false },
  miniatura: { type: String, required: false, default: 'https://via.placeholder.com/224x126.png?text=Sin+Imagen' },
  generos: { type: [String], required: false, default: ['Género desconocido'] },
  anio: { type: String, required: false, default: '2023' }
});

const pelisModel = mongoose.model('pelis', pelisSchema);
module.exports = { pelisModel };