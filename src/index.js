const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');
const moment = require('moment');
const route = require('./routes');
const db = require('./config/db');
const cookieParser = require('cookie-parser');
const session = require('express-session'); // 👈 moved here

// Kết nối DB
db.connect();

const app = express();
const port = 5000;

// Middleware xử lý dữ liệu từ form và JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware xử lý cookie
app.use(cookieParser());

// ⚠️ Đặt middleware session **TRƯỚC** `route(app)`
app.use(session({
  secret: 'duong123', 
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 1000 * 60 * 60 } // 1 giờ
}));

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

// Method override
app.use(methodOverride('_method'));

// Template engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      formatDate: function(date) {
        if (!date) return '';
        return new Date(date).toLocaleDateString('vi-VN', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      },
      moment: function(date, options) {
        if (!date) return 'N/A';
        const format = options.hash.format || 'DD/MM/YYYY HH:mm';
        return moment(date).format(format);
      },
    },
  })
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// ✅ Routes sau khi đã có session
route(app);

// Server
app.listen(port, () => {
  console.log(`App đang chạy tại http://localhost:${port}`);
});
