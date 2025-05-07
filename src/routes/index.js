const newsRouter = require('./news');
const meRouter = require('./me');
const authRouter = require('./auth');
const coursesRouter = require('./courses');
const slideRouter = require('./slide');
const siteRouter = require('./site');

function route(app) {
    app.use('/auth', authRouter);
    app.use('/news', newsRouter);
    app.use('/me', meRouter);
    app.use('/courses', coursesRouter);
    app.use('/slides', slideRouter);
    app.use('/', siteRouter);
}

module.exports = route;
