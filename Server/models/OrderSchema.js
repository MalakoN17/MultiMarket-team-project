const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  number: { type: String, unique: true },
  barcode: { type: String, unique: true },
  userId: { type: String, required: true },
  userPaymentIdentity: { type: String },
  userCustomerId: { type: String },
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
    default: 'received',
  },
  deliveryStatus: {
    type: String,
  },
  isMain: {
    type: Boolean,
    default: false,
    formType: 'switch',
    tableType: 'boolean',
  },
  orderIds: {
    type: [String],
    tableType: 'tags',
    formType: 'text',
    autocomplete: { collection: 'order', multiple: true },
  },
  mainOrderNumber: {
    type: String,
    autocomplete: { collection: 'order', multiple: true },
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
  // etradoPayment: { type: mongoose.Types.ObjectId, ref: "EtradoPayment" },
  delivery: {
    cost: Number,
    start: Date,
    end: {
      type: Date,
      default: newDate(+newDate() + 3 * 60 * 60 * 24 * 1000).toISOString(),
    },
    kind: {
      type: String,
      required: true,
      enum: ['regular', 'express', 'pickup'],
      default: 'regular',
    },
  },
  paymentsNum: { type: Number, default: 1 },
  surfaces: {
    type: Number,
    default: 1,
  },
  surfacesWeight: { type: String, default: 1 },
  paymentType: { type: String },
  baldarNumber: { type: Number },
  card: {
    id: { type: String },
    ownerId: {
      type: String,
    },
    last4digits: { type: String },
    token: { type: String },
    company: String,
    exp: { type: String },
  },
  coupon: {
    name: String,
    code: String,
    discountOf: {
      type: Object,
      formType: 'group',
      sum: Number,
      kind: {
        type: String,
        required: true,
        enum: ['nis', 'percents'],
        default: 'nis',
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
        replacedId: String,
      },
    ],
    select: false,
  },
  storeId: {
    type: String,
    select: false,
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
  id: { type: String, required: true },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model('order', OrderSchema);
