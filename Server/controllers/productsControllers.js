const productsModel = require('../models/productsModel');
const cloudinary = require('../utils/cloudinary');

const getAllProductsStore = async (req, res, next) => {
  const { storeId } = req.params;
  try {
    const products = await productsModel.find({ storeId });
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getAllProducts = async (req, res, next) => {
  try {
    const products = await productsModel.find({});
    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

const getProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await productsModel.find({ _id: productId });
    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

const getProductsBySection = async (req, res, next) => {
  const { sectionId } = req.params;
  try {
    const products = await productsModel.find({ sectionId });

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

//Create Product
const createProduct = async (req, res, next) => {
  const data = req.body;
  try {
    if (data.image !== '') {
      const result = await cloudinary.uploader.upload(data.image, {
        folder: 'products',
      });
      data.image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
      const product =  productsModel(data);
      await product.save();
      res.status(200).json('product create succuss');
    }
  } catch (error) {
    next(error);
  }
};

//Update products
const updateProduct = async (req, res, next) => {
  const { productId } = req.params;
  const data = req.body;
  try {
    const product = await productsModel.findById(productId);
    if (data.image.url !== product.image.url) {
      await cloudinary.uploader.destroy(imageId);
      const result = await cloudinary.uploader.upload(data.image, {
        folder: 'products',
      });
      data.image = {
        public_id: result.public_id,
        url: result.secure_url,
      };
    }
    await productsModel.findByIdAndUpdate(
      data,
      { $set:  data  },
      { new: true }
    );
    res.status(200).json('product create succuss');
  } catch (error) {
    next(error);
  }
};

// Delete product
const deleteProduct = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await productsModel.findById(productId);
    const result = cloudinary.uploader.destroy(product.public_id);
    if (result) {
      await productsModel.findByIdDelete(productId);
      res.status(200).json('product deleted');
    }
  } catch (error) {
    next(error);
  }
};
module.exports = {
  getAllProductsStore,
  getProduct,
  getProductsBySection,
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProducts,
};
