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
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  priority: {
    type: Number,
    enum: [1, 2, 3, 4, 5],
  },
  sectionId: {
    type: mongoose.Types.ObjectId,
    ref: 'section',
    autocomplete: { collection: 'section' },
  },
  kosherType: {
    type: String,
    enum: [`בד"ץ`, 'רבנות', 'מהדרין'],
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
  subCategory: { type: String },
  fields: { type: Object },
  active: {
    type: Boolean,
    default: true,
  },
  weight: {
    type: Object,
    inWeight: { type: Boolean },
    avgWeightPerUnit: {
      type: Number,
      hide: true,
      required: true,
      min: 0,
    },
    weightUnit: {
      type: String,
      required: true,
      enum: ['kgs', 'gr', 'liters', 'mls'],
      default: 'kgs',
      hide: true,
    },
  },
  units: {
    type: Object,
    unitsInCarton: { type: Number, min: '0', default: 1 },
    amount: { type: Number, default: 1, min: '0' },
    minimumOrderCartonsCount: {
      type: Number,
      default: 1,
      min: '0',
    },
    measureUnits: {
      type: String,
      enum: ['units', 'kgs', 'gr', 'liters', 'mls'],
      default: 'units',
      hide: true,
    },
  },
  contactInfo: {
    type: Object,
    contactNumber: { type: String },
    contactName: { type: String },
  },
  expirationDate: {
    type: Date,
    required: true,
    default: Date.now,
  },
  manufacturer: {
    type: String,
  },
  parallelImporter: {
    type: Boolean,
    default: false,
  },
  brand: { type: String },
  salesQuantity: { type: Number, required: true, default: 0 },
  productStock: { type: Number, required: true, default: '' },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  description: {
    type: String,
    required: true,
  },
  createdBy: { type: String, required: true },
});

module.exports = new mongoose.model('product', ProductSchema);
