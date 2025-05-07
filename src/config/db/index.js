const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/blog_dev'); // Xóa các tùy chọn không cần thiết
        console.log('✅ Kết nối MongoDB thành công');
    } catch (error) {
        console.error('❌ Kết nối MongoDB thất bại:', error.message);
    }
}

module.exports = { connect };
