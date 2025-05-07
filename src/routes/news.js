const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const News = new Schema(
  {
    title: { type: String, required: true, minlength: 3, maxlength: 100 },
    content: { type: String, default: '' },
    image: { type: String, default: '' },
    videoId: {
      type: String,
      validate: {
        validator: (v) => !v || /^[a-zA-Z0-9_-]{11}$/.test(v),
        message: 'videoId không hợp lệ!',
      },
    },
    author: { type: String, required: true, minlength: 3, maxlength: 50 },
    slug: { type: String, slug: 'title', unique: true },
  },
  { timestamps: true }
);

// Add plugins
News.plugin(slug);
News.plugin(mongooseDelete, { deletedAt: true, overrideMethods: 'all' });
News.index({ slug: 1 });

module.exports = mongoose.model('News', News);