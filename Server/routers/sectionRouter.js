const express = require('express');
const router = express.Router();
const { getAllSection, createNewSection,updateSection,deleteSection } = require('../controllers/sectionController');

router.get('/',getAllSection )
router.post('/', createNewSection);
router.put('/:id', updateSection);
router.delete('/:id', deleteSection);


module.exports = router;
