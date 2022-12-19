const mongoose = require('mongoose');

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  coverImage: {
    type: String,
    public_id: String,
    url: String,
    required: true,
    noSearch: true,
  },
  active: { type: Boolean, default: true },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model('department', DepartmentSchema);
