const mongoose = required('mongoose');

const ShippingCertificateSchema = new mongoose.Schema({
  id: { type: String, required: true },
  number: { type: String, required: true, readonly: true },
  finalSum: { type: Number, required: true, min: '0', readonly: true },
  countProducts: {
    type: Number,
    required: true,
    min: '0',
    readonly: true,
  },
  startDate: {
    type: Date,
    required: true,
    default: Date.now,
    max: oneYearFromNow,
  },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model(
  'ShippingCertificate',
  ShippingCertificateSchema
);
