const mongoose = require('mongoose');

const OrderStoreSchema = new mongoose.Schema({
  number: { type: String, unique: true },
  userId: { type: String, required: true },
  status: {
    type: String,
    required: true,
    enum: [
      'received',
      'processing',
      'ready',
      'shipped',
      'done',
      'canceled',
      'failed',
      'hold',
    ],
    default:'received'
  },

  firstName: {
    type: String,
    required: true,
  },
  lastName: { type: String, required: true },
  address: {
    type: Object,
    required: true,
    city: { type: String, required: true },
    street: { type: String, required: true },
    building: { type: Number, required: true },
    apartment: { type: Number, required: true },
    floor: Number,
    comment: String,
    coordinates: { lat: Number, lng: Number },
  },
  email: {
    type: String,
    lowercase: true,
    required: true,
  },
  phone: { type: String, required: true },
  phone2: { type: String },
  sum: {
    type: Number,
    required: true,
  },
  finalSum: { type: Number, required: true },
  delivery: {
    cost: Number,
    start: Date,
    end: Date,
    kind: {
      type: String,
      required: true,
      enum: ['regular', 'express', 'pickup'],
      default: 'regular',
    },
  },
  coupon: {
    name: String,
    code: String,
    discountOf: {
      type: Object,
      sum: Number,
      kind: {
        type: String,
        enum: ['nis', 'percents'],
      },
    },
  },
  products: {
    type: [
      {
        id: String,
        amount: Number,
        orderAmount: Number,
        finalAmount: Number,
        orderPrice: Number,
        finalPrice: Number,
      },
    ],
  },
  storeId: {
    type: String,
    required: true,
  },
  timeline: {
    received: { type: Date, default: Date.now },
    processing: Date,
    ready: Date,
    shipped: Date,
    done: Date,
    canceled: Date,
    failed: Date,
    hold: Date,
  },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model('order', OrderStoreSchema);