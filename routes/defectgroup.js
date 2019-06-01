const express = require('express');
const router = express.Router();
const defectGroupController = require('../app/api/controllers/defectgroup');

router.post('/',defectGroupController.create);
router.get('/', defectGroupController.getAll);
router.get('/getdefectsgroup', defectGroupController.getdefectsgroup);



module.exports = router;