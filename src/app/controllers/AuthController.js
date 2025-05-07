const bcrypt = require('bcrypt');
const User = require('../models/User');

class AuthController {
  // [GET] /login
  loginForm(req, res) {
    res.render('login');
  }

  // [POST] /login
// [POST] /login
async login(req, res) {
  const { username, password } = req.body;
  const user = await User.findOne({ username });

  if (!user) {
    return res.render('login', { error: 'Tài khoản không tồn tại' });
  }

  const validPass = await bcrypt.compare(password, user.password);
  if (!validPass) {
    return res.render('login', { error: 'Sai mật khẩu' });
  }

  req.session.userId = user._id;
  req.session.userName = user.username;
  res.redirect('/');
}

  // [GET] /signup
  signupForm(req, res) {
    res.render('signup'); // Hiển thị form đăng ký
  }

  // [POST] /signup
  async signup(req, res) {
    const { username, password } = req.body;
  
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.render('signup', { error: 'Tên đã tồn tại' });
    }
  
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashedPassword });
    await newUser.save();
    res.redirect('login');
  }
  

  // [GET] /logout
  logout(req, res) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
}

module.exports = new AuthController();
