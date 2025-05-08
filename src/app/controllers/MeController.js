const Course = require('../models/Course');
const News = require('../models/News');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class MeController {
  // [GET] /me/stored/courses
  storedCourses(req, res, next) {
    Promise.all([Course.find({}), Course.countDocumentsDeleted()])
      .then(([courses, deletedCount]) =>
        res.render('me/stored-courses', {
          deletedCount,
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }

  // [GET] /me/trash/courses
  trashCourses(req, res, next) {
    Course.findDeleted({})
      .then((courses) =>
        res.render('me/trash-courses', {
          courses: mutipleMongooseToObject(courses),
        }),
      )
      .catch(next);
  }
  // [GET] /me/stored/news
  storedNews(req, res, next) {
    Promise.all([News.find({}), News.countDocumentsDeleted()])
      .then(([news, deletedCount]) =>
        res.render('me/stored-news', {
          deletedCount,
          news: mutipleMongooseToObject(news), // Sửa từ 'courses' thành 'news'
        }),
      )
      .catch(next);
  }

  // [GET] /me/trash/news
  trashNews(req, res, next) {
    News.findDeleted({})
      .then((news) =>
        res.render('me/trash-news', {
          news: mutipleMongooseToObject(news), // Sửa từ 'courses' thành 'news'
        }),
      )
      .catch(next);
  }
}
module.exports = new MeController();
