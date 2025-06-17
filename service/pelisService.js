const { pelisModel } = require('../models/pelisModel');

class pelisService {
  static async createPelis(titulo, descripcion, duracion, url_video, miniatura, generos, anio, drive_file_id) {
    const newPeli = new pelisModel({
      titulo, descripcion, duracion, url_video, miniatura, generos, anio, drive_file_id
    });
    return await newPeli.save();
  }

  static async getPelis() {
    const pelis = await pelisModel.find();
    if (pelis.length === 0) {
      throw new Error('No hay películas disponibles');
    }
    return pelis;
  }

  static async filterPelis(titulo) {
    const peli = await pelisModel.findOne({ titulo });
    if (!peli) {
      throw new Error('No se encontró el título de la película, váyase a Cuevana');
    }
    return peli;
  }
}

module.exports = { pelisService };