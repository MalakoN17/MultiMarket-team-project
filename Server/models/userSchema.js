const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  profileImage: {
    type: String,
  },
  firstName: { type: String },
  lastName: { type: String },
  name: String,
  email: {
    type: String,
    required: true,
    unique: true,
    default: '',
    lowercase: true,
  },
  phone: { type: String, unique: true },
  loginCode: { type: String, select: false },
  phone2: { type: String },
  password: {
    type: String,
    required: true,
    // select: false,
  },
  storeIds: {
    type: [String],
    autocomplete: { collection: 'store', multiple: true },
  },
  address: {
    type: Object,
    city: { type: String },
    street: { type: String },
    building: { type: Number },
    apartment: { type: Number },
    floor: { type: Number },
    comment: { type: String },
    coordinates: { lat: Number, lng: Number },
  },
  paymentBillInfo: {
    type: Object,
    accountOwner: { type: String },
    numberAccount: { type: String },
    numberBranch: { type: String },
    bankName: { type: Number },
  },
  registerType: {
    type: String,
    enum: ['email', 'facebook', 'google'],
    default: 'email',
  },
  facebookToken: { type: String, select: false },
  googleToken: { type: String, select: false },
  resetPassToken: { type: String, select: false },
  authToken: { type: String, select: false },
  resetPassExp: { type: Date, select: false },
  active: {
    type: Boolean,
    default: true,
  },
  cards: [
    {
      id: { type: String, required: true},
      ownerId: { type: String, required: true},
      last4digits: { type: String, required: true },
      CVV: { type: String, required: true, select: false },
      company: String,
      exp: { type: String, required: true },
    },
  ],
  businessTypes: {
    type: [mongoose.Types.ObjectId],
    ref: 'section',
    autocomplete: { collection: 'section', multiple: true },
  },
  lastUpdate: { type: Date, default: Date.now },
  lastSeen: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});
module.exports = new mongoose.model('user', UserSchema);
