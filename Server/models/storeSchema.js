const mongoose = require('mongoose');

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
    public_id: String,
    url: String,
    noSearch: true,
  },
  darklogo: {
    type: String,
    public_id: String,
    url: String,
    noSearch: true,
  },
  coverImage: {
    // required: true,
    public_id: String,
    url: String,
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
