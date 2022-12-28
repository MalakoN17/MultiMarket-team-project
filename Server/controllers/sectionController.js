const sectionSchema = require('../models/sectionSchema');

const getAllSection = async (req, res, next) => {
  const {storeId} = req.params
  try {
    const sections = await sectionSchema.find({storeId});
    res.status(200).json(sections);
  } catch (err) {
    next(err);
  }
};
const getSection = async (req, res, next) => {
  const { sectionId } = req.params;
  try {
    const section = await sectionSchema.findById(sectionId);
    res.status(200).json(section);
  } catch (err) {
    next(err);
  }
};

const createNewSection = async (req, res, next) => {
  try {
    const obj = req.body;
    const newSection = await sectionSchema(obj);
    await newSection.save();
    res.status(200).json(newSection);
  } catch (err) {
    next(err);
  }
};

const updateSection = async (req, res, next) => {
  const { sectionId } = req.params;
  try {
    const updateSection = await sectionSchema.findByIdAndUpdate(
      sectionId,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateSection);
  } catch (err) {
    next(err);
  }
};

const deleteSection = async (req, res, next) => {
  const { sectionId } = req.params;
  try {
    await sectionSchema.findByIdAndDelete(sectionId);
    res.status(200).json('section Deleted');
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllSection,
  getSection,
  createNewSection,
  updateSection,
  deleteSection,
};
