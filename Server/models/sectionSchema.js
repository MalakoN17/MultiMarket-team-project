const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  departmentIds: {
    type: String,
    required: true,
    autocomplete: { collection: 'department' },
  },
  active: {
    type: Boolean,
    default: true,
  },
  fields: {
    type: [
      {
        name: { type: String, required: true },
        kind: {
          type: String,
          enum: ['text', 'number', 'switch'],
          required: true,
        },
      },
    ],
  },
  lastUpdate: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now },
  createdBy: { type: String, required: true },
});

module.exports = new mongoose.model('section', SectionSchema);
