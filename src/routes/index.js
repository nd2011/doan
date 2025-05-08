const newsRouter = require('./news');
const meRouter = require('./me');
const authRouter = require('./auth');
const coursesRouter = require('./courses');
const slideRouter = require('./slide');
const siteRouter = require('./site');
const adminRouter = require('./admin');
const gioithieuRouter = require('./gioithieu');

function route(app) {
  app.use('/admin', adminRouter);
  app.use('/auth', authRouter);
  app.use('/news', newsRouter);
  app.use('/me', meRouter);
  app.use('/courses', coursesRouter);
  app.use('/slides', slideRouter);
  app.use('/gioithieu', gioithieuRouter);
  app.use('/', siteRouter);
}

module.exports = route;
