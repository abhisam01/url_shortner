const { Schema, model } = require('mongoose');
const ShortUniqueId = require('short-unique-id');
const { randomUUID } = new ShortUniqueId({ length: 10 });

const shortUrlSchema = new Schema({
  full: {
    type: String,
    required: true,
  },
  short: {
    type: String,
    required: true,
    default: () => randomUUID(),
  },
  clicks: {
    type: Number,
    required: true,
    default: 0,
  },
});

module.exports = model('shoetUrlModel', shortUrlSchema);
