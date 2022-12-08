const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
  name: { type: String, required: true },
  code: { type: String, 'vd-type': 'coupon', required: true, unique: true },
  minimumCartSum: { type: Number, min: '0', required: true },
  oneTimeUse: { type: Boolean, default: false },
  datesRange: {
    type: Object,
    start: { type: Date, required: true, default: Date.now },
    end: { type: Date, required: true },
  },
  discountOf: {
    type: Object,
    sum: { type: Number, required: true, min: '0' },
    kind: {
      type: String,
      required: true,
      enum: ['nis', 'percents'],
      default: 'nis',
    },
  },
  userIds: { type: [String], select: false },
  storeId: { type: String, required: true },
  active: { type: Boolean, default: true },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model('coupon', CouponSchema);
