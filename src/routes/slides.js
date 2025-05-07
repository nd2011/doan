const express = require('express');
const router = express.Router();
const slideController = require('../app/controllers/SlideController');

router.get('/slides/create', slideController.create);
router.post('/slides/store', slideController.store);
router.get('/slides/:id/edit', slideController.edit);
router.put('/slides/:id', slideController.update);
router.delete('/slides/:id', slideController.destroy);
router.get('/slides', slideController.index);

module.exports = router;
