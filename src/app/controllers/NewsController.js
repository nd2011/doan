const News = require('../models/News');
const { mongooseToObject } = require('../../util/mongoose');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class NewsController {
  // [GET] /news
  index(req, res, next) {
    News.find({})
      .then((news) =>
        res.render('news', {
          news: mutipleMongooseToObject(news),
        }),
      )
      .catch(next);
  }
  // [GET] /news/:slug
  show(req, res, next) {
    News.findOne({ slug: req.params.slug })
      .then((news) =>
        res.render('news/show', {
          news: mongooseToObject(news),
        }),
      )
      .catch(next);
  }

  // [GET] /news/create
  create(req, res, next) {
    res.render('news/create');
  }

  // [POST] /news/store
  store(req, res, next) {
    console.log('Form data:', req.body);
    req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
    const news = new News(req.body);
    news
      .save()
      .then(() => {
        console.log('News saved successfully');
        res.redirect('/me/stored/news');
      })
      .catch((error) => {
        console.error('Error saving news:', error);
        res.status(500).send('Error saving news: ' + error.message);
      });
  }

  // [GET] /news/:id/edit
  edit(req, res, next) {
    News.findById(req.params.id)
      .then((news) =>
        res.render('news/edit', {
          news: mongooseToObject(news),
        }),
      )
      .catch(next);
  }

  // [PUT] /news/:id
  update(req, res, next) {
    News.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/news'))
      .catch(next);
  }

  // [DELETE] /news/:id
  destroy(req, res, next) {
    News.delete({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [DELETE] /news/:id/force
  forceDestroy(req, res, next) {
    News.deleteOne({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }

  // [PATCH] /news/:id/restore
  restore(req, res, next) {
    News.restore({ _id: req.params.id })
      .then(() => res.redirect('back'))
      .catch(next);
  }
}

module.exports = new NewsController();
