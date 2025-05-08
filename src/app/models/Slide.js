const mongoose = require('mongoose');

const Slide = new mongoose.Schema({
  image: { type: String, required: true },
  title: String,
  description: String,
});

module.exports = mongoose.model('Slide', Slide);
