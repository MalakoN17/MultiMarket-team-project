const departmentModel = require('../models/departmentSchema.js');

//Create
const createNewDepartment = async (req, res, next) => {
  const newDepartment = new departmentModel(req.body);
  try {
    const saveDepartment = await newDepartment.save();
    res.status(200).json(saveDepartment);
  } catch (err) {
    next(err);
  }
};
//Update
const updateDepartment = async (req, res, next) => {
  try {
    const updateDepartment = await departmentModel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updateDepartment);
  } catch (err) {
    next(err);
  }
};
//Delete
const deleteDepartment = async (req, res, next) => {
  try {
    await departmentModel.findByIdAndDelete(req.params.id);
    res.status(200).json('Department Deleted');
  } catch (err) {
    next(err);
  }
};
//Get
const getDepartment = async (req, res, next) => {
  try {
    const department = await departmentModel.findById(req.params.id);
    res.status(200).json(department);
  } catch (err) {
    next(err);
  }
};
//Get All
const getAllDepartments = async (req, res, next) => {
  try {
    const departments = await departmentModel.find({});
    res.status(200).json(departments);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getAllDepartments,
  getDepartment,
  createNewDepartment,
  updateDepartment,
  deleteDepartment,
};
