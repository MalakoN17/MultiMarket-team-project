const sectionSchema = require('../models/sectionSchema');

const getAllSection = async (req, res, next) => {
  try {
    const sections = await sectionSchema.find({});
    res.status(200).json(sections);
  } catch (err) {
    next(err);
  }
};
const getSection = async (req, res, next) => {
  try {
    const { sectionId } = req.params;
    const section = await sectionSchema.findById(sectionId);
    res.status(200).json(section);
  } catch (err) {
    next(err);
  }
};

const createNewSection = async (req, res, next) => {
  try {
    const obj = req.body;
    const newSection = sectionSchema(obj);
    await newSection.save();
    res.status(200).json('create section');
  } catch (err) {
    next(err);
  }
};

const updateSection = async (req, res, next) => {
  try {
    const updateSection = await sectionSchema.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updateSection);
  } catch (err) {
    next(err);
  }
};

const deleteSection = async (req, res, next) => {
  try {
    await sectionSchema.findByIdAndDelete(req.params.id);
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
