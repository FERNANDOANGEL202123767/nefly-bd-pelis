const router = require('express').Router();
const {pelisController} = require('../Controller/pelisController');
const { requireAuth } = require('../middleware/authmiddleaware');

router.post('/crear',requireAuth, pelisController.createPelis); 
router.get('/listar',requireAuth, pelisController.getPelis);
router.post('/filtrar',requireAuth, pelisController.filterPelis);

module.exports = router
