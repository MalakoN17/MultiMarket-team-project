const departmentModel = require('../models/departmentSchema.js');
const cloudinary = require('../utils/cloudinary');

//Create
const createNewDepartment = async (req, res, next) => {
  const data = req.body;
  try {
    if (data.image) {
      const result = await cloudinary.uploader.upload(data.image, {
        folder: 'department',
      });
      data.image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
      const newDepartment = new departmentModel(data);
      await newDepartment.save();
      res.status(200).json('new department created');
    }
  } catch (err) {
    next(err);
  }
};
//Update
const updateDepartment = async (req, res, next) => {
  const data = req.body;
  const { departmentId } = req.params;
  try {
    const department = await departmentModel.findById(departmentId);
    if (data.coverImage !== department.coverImage.url) {
      const remove = await cloudinary.uploader.destroy(
        department.image.public_id
      );
      if (remove) {
        const result = await cloudinary.uploader.upload(data.image, {
          folder: 'department',
        });
        data.image = {
          public_id: result.public_id,
          url: result.secure_url,
        };
      }
      const updateDepartment = await departmentModel.findByIdAndUpdate(
        departmentId,
        {
          $set: data,
        },
        { new: true }
      );
      res.status(200).json('update succuss');
    }
  } catch (err) {
    next(err);
  }
};
//Delete
const deleteDepartment = async (req, res, next) => {
  const { departmentId } = req.params;
  try {
    const department = await departmentModel.findById(departmentId);
    const remove = await cloudinary.uploader.upload(department.coverImage.public_id);
    await departmentModel.findByIdAndDelete(departmentId);
    res.status(200).json('Department Deleted');
  } catch (err) {
    next(err);
  }
};
//Get
const getDepartment = async (req, res, next) => {
  const {departmentId} = req.params
  try {
    const department = await departmentModel.findById(departmentId);
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
