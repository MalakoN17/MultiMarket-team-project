const ShippingCertificate = require('../models/shippingCertificateSchema');

//Create
const createShippingCertificate = async (req, res, next) => {
  const newShippingCertificate = new ShippingCertificate(req.body);
  try {
    const saveShippingCertificate = await newShippingCertificate.save();
    res.status(200).json(saveShippingCertificate);
  } catch (err) {
    next(`Error ${err}`);
  }
};

//Update
const updateShippingCertificate = async (req, res, next) => {
  try {
    const updateShippingCertificate =
      await ShippingCertificate.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
    res.status(200).json(updateShippingCertificate);
  } catch (err) {
    next(err);
  }
};

//Delete
const deleteShippingCertificate = async (req, res, next) => {
  try {
    await ShippingCertificate.findByIdAndDelete(req.params.id);
    res.status(200).json('Shipping Certificate Deleted');
  } catch (err) {
    next(err);
  }
};

//Get
const getShippingCertificate = async (req, res, next) => {
  try {
    const shippingCertificate = await ShippingCertificate.findById(
      req.params.id
    );
    res.status(200).json(shippingCertificate);
  } catch (err) {
    next(err);
  }
};

//Get All
const getAllShippingCertificate = async (req, res, next) => {
  try {
    const shippingCertificates = await ShippingCertificate.find({});
    res.status(200).json(shippingCertificates);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createShippingCertificate,
  updateShippingCertificate,
  deleteShippingCertificate,
  getShippingCertificate,
  getAllShippingCertificate,
};
