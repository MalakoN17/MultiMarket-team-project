const mongoose = require('mongoose');

const AdminStoreUserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  userName: String,
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, unique: true },
  password: { type: String, required: true },
  authToken: { type: String },
  authTokenMobile: { type: String },
  loginCode: { type: String },
  role: {
    type: String,
    enum: ['store', 'admin', 'owner', 'delivery'],
    default: 'store',
  },
  permission: { type: String, enum: ['read', 'write'], default: 'read' },
  storeIds: { type: [ObjectID], required: true },
  lastSeen: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
});

module.exports = new mongoose.model('adminStoreUser', AdminStoreUserSchema);
