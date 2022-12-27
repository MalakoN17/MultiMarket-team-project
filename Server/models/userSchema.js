const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  profileImage: {
    public_id: String,
    url: String,
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
  // loginCode: { type: String, select: false },
  // phone2: { type: String },
  password: {
    type: String,
    required: true,
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

 
  lastUpdate: { type: Date, default: Date.now },
  lastSeen: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});
module.exports = new mongoose.model('user', UserSchema);
