const mongoose = require('mongoose');
const slugify = require('slugify');
const mongooseDelete = require('mongoose-delete');

const Schema = mongoose.Schema;

const Course = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    image: { type: String },
    videoID: { type: String, required: true },
    level: { type: String },
    slug: { type: String, unique: true },
  },
  {
    timestamps: true,
  },
);

// Tạo slug tự động trước khi lưu
Course.pre('save', function (next) {
  if (this.name) {
    this.slug = slugify(this.name, {
      lower: true, // Chuyển thành chữ thường
      strict: true, // Loại bỏ ký tự đặc biệt
    });
  }
  next();
});

// Thêm plugin xóa mềm
Course.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: 'all',
});

module.exports = mongoose.model('Course', Course);
