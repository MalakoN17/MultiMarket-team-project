const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  barcode: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    width: 320,
    format: 'png',
    fit: 'contain',
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
    ref:'section',
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
  // storeId: {
  //   type: String,
  //   select: false,
  //   autocomplete: { collection: 'store' },
  //   formStep: 2,
  //   required: true,
  // },
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
  // deliveryOrderPlace: {
  //   type: Object,
  //   city: { type: String },
  //   street: { type: String },
  //   number: { type: Number },
  //   floor: { type: Number },
  // },
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
  brand: { type: String},
  salesQuantity: { type: Number, required: true, default: 0 },
  productStock: { type: Number, required: true, default: '' },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  description: {
    type: String,
    required: true,
  },
  createdBy: { type: String, required: true},
});

const StoreSchema = new mongoose.Schema({
  bnNumber: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  urlName: {
    type: String,
  },
  description: {
    type: String,
  },
  lightlogo: {
    type: String,
    noSearch: true,
  },
  darklogo: {
    type: String,
    noSearch: true,
  },
  coverImage: {
    type: String,
    required: true,
    noSearch: true,
    width: 1000,
    ratio: 2.5,
    format: 'jpg',
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
    lowercase: true,
  },
  departmentIds: {
    type: [String],
  },
  products: [ProductSchema],
  address: {
    type: Object,
    city: {
      type: String,
      required: true,
    },
    street: {
      type: String,
      required: true,
    },
    building: {
      type: Number,
      required: true,
    },
    apartment: { type: Number },
    coordinates: { lat: Number, lng: Number },
  },
  active: {
    type: Boolean,
    default: true,
  },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model('store', StoreSchema);
