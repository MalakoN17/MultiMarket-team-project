const mongoose = require('mongoose');

const OwnerStoreUserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  phone: { type: String, unique: true },
  password: { type: String, required: true },
  // authToken: { type: String },
  // loginCode: { type: String },
  role: {
    type: String,
    enum: ['store', 'admin', 'owner', 'delivery'],
    default: 'store',
  },
  permission: { type: String, enum: ['read', 'write'], default: 'read' },
  storeIds: { type: [mongoose.Types.ObjectId], ref: 'store', required: true },
  lastSeen: { type: Date, default: Date.now },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
});

module.exports = new mongoose.model('ownerStoreUser', OwnerStoreUserSchema);
