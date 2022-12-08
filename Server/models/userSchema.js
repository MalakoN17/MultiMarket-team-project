const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  image: {
    type: String,
    noSearch: true,
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
  userId: { type: String, default: uniqid().slice(0, 6) },
  loginCode: { type: String, select: false },
  phone2: { type: String },
  password: {
    type: String,
    required: true,
    select: false,
  },
  storeIds: {
    type: [String],
    required: true,
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
    acountOwner: { type: String },
    numberAcount: { type: String },
    numberBranch: { type: String },
    bankName: { type: Number },
  },
  // etradoBalance: {
  //   type: Object,
  //   balance: { type: Number, formType: "nis" },
  //   income: { type: Number, formType: "nis" },
  //   outcome: { type: Number, formType: "nis" },
  // },
  userId: {
    type: String,
  },
  userCustomerId: { type: String },
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
  marketingList: {
    type: Boolean,
    default: true,
  },
  // eTradoApproved: {
  //   type: Boolean,
  //   default: true,
  // },
  takanon: {
    type: Boolean,
    default: true,
  },
  active: {
    type: Boolean,
    default: true,
  },
  cards: [
    {
      id: { type: String, required: true, default: uniqid },
      ownerId: { type: String, required: true },
      id: { type: String, required: true, default: uniqid },
      last4digits: { type: String, required: true },
      token: { type: String, required: true, select: false },
      company: String,
      exp: { type: String, required: true },
    },
  ],
  buisnnesTypes: {
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
