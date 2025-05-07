const express = require('express');
const router = express.Router();
const slideController = require('../app/controllers/SlideController');

router.get('/', slideController.index);
router.get('/create', slideController.create);
router.post('/store', slideController.store);
router.get('/:id/edit', slideController.edit);
router.post('/:id/update', slideController.update);
router.post('/:id/delete', slideController.delete);

module.exports = router;
