const Course = require('../models/Course');
const Slide = require('../models/Slide');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(req, res, next) {
        Promise.all([Course.find({}), Slide.find({})])
            .then(([courses, slides]) =>
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                    slides: mutipleMongooseToObject(slides),
                }),
            )
            .catch(next);
    }
}

module.exports = new SiteController();
