const express = require('express');
const router = express.Router();
const {
  getAllSection,
  createNewSection,
  updateSection,
  deleteSection,
  getSection,
} = require('../controllers/sectionController');

router.get('/', getAllSection);
router.get('/:id', getSection);
router.post('/', createNewSection);
router.put('/:id', updateSection);
router.delete('/:id', deleteSection);

module.exports = router;
