const mongoose = required('mongoose');

const DepartmentSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true, unique: true },
  coverImage: { type: String, required: true, noSearch: true },
  active: { type: Boolean, default: true },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true, noSearch: true },
});

module.exports = new mongoose.model('department', DepartmentSchema);
