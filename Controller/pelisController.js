const { pelisService } = require('../service/pelisService');

class pelisController {
  static async createPelis(req, res) {
    const { titulo, descripcion, duracion, url_video, miniatura, generos, anio, drive_file_id } = req.body;
    try {
      const savePeli = await pelisService.createPelis(titulo, descripcion, duracion, url_video, miniatura, generos, anio, drive_file_id);
      res.json(savePeli);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async getPelis(req, res) {
    try {
      const pelis = await pelisService.getPelis();
      res.json(pelis);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  static async filterPelis(req, res) {
    const { titulo } = req.body;
    try {
      const peli = await pelisService.filterPelis(titulo);
      res.json(peli);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

module.exports = { pelisController };