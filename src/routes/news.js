const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');

router.get('/', newsController.index); // danh sách
router.get('/create', newsController.create); // tạo mới
router.get('/:slug', newsController.show); // xem chi tiết
router.post('/store', newsController.store); // lưu mới
router.get('/:id/edit', newsController.edit); // sửa
router.put('/:id', newsController.update); // cập nhật
router.delete('/:id', newsController.destroy); // xóa mềm

module.exports = router;
