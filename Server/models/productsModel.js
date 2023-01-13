const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  barcode: {
    type: String,
    required: true,
  },
  image: {
    public_id: String,
    url: String,
  },
  name: {
    type: String,
    required: true,
  },
  storeName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
    min: 0,
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  sectionId: {
    type: [String],
    ref: 'section',
    autocomplete: { collection: 'section' },
  },
  kosherType: {
    type: String,
    enum: ['בד"ץ', 'רבנות', 'מהדרין'],
  },
  productTag: {
    type: String,
    enum: ['surfaces', 'short-exp'],
    hide: false,
  },
  storeId: {
    type: String,
    required: true,
    ref: 'store',
    autocomplete: { collection: 'store' },
  },
  subcategory: { type: String },
  weight: {
    type: Number,
    require: true
  },
  weightUnit: {
    type: String,
    required: true,
    enum: ['kg', 'g', 'liters', 'mls'],
    default: 'kg',
    hide: true,
  },
  units: {
    type: Number,
    require: true
  },
  contactNumber: {
    type: String,
  },
  manufacturer: {
    type: String,
  },
  parallelImporter: {
    type: Boolean,
    default: false,
  },
  salesQuantity: { type: Number, required: true, default: 0 },
  productStock: { type: Number, required: true, default: 0 },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  description: {
    type: String,
    required: true,
  },
  createdBy: { type: String, required: true },
});

module.exports = new mongoose.model('product', ProductSchema);
