const Slide = require('../models/Slide');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SlideController {
  // [GET] /slides
  index(req, res, next) {
    Slide.find({})
      .then((slides) =>
        res.render('slides/index', {
          slides: mutipleMongooseToObject(slides),
        }),
      )
      .catch(next);
  }

  // [GET] /slides/create
  create(req, res) {
    res.render('slides/create');
  }

  // [POST] /slides/store
  store(req, res) {
    const slide = new Slide(req.body);
    slide
      .save()
      .then(() => res.redirect('/slides'))
      .catch((err) => {
        console.error(err);
        res.status(500).send('Error saving slide');
      });
  }

  // [GET] /slides/:id/edit
  edit(req, res, next) {
    Slide.findById(req.params.id)
      .then((slide) => {
        res.render('slides/edit', {
          slide: mongooseToObject(slide),
        });
      })
      .catch(next);
  }

  // [POST] /slides/:id/update
  async update(req, res) {
    await Slide.updateOne({ _id: req.params.id }, req.body);
    res.redirect('/slides');
  }

  // [POST] /slides/:id/delete
  async delete(req, res) {
    await Slide.deleteOne({ _id: req.params.id });
    res.redirect('/slides');
  }
}

module.exports = new SlideController();
