const express = require('express');
const router = express.Router();
const defectController = require('../app/api/controllers/defect');

router.post('/',defectController.create);
router.get('/', defectController.getAll);




module.exports = router;