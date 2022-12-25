const express = require('express');
const router = express.Router();
const {
  getAllSection,
  createNewSection,
  updateSection,
  deleteSection,
  getSection,
} = require('../controllers/sectionController');

router.get('/:storeId', getAllSection);
router.get('/section/:sectionId', getSection);
router.post('/', createNewSection);
router.put('/:sectionId', updateSection);
router.delete('/:sectionId', deleteSection);

module.exports = router;
