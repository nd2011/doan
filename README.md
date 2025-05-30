Blog Project
Mô tả dự án
Đây là một dự án blog được xây dựng để quản lý và chia sẻ các bài viết. Dự án sử dụng Node.js và MongoDB làm công nghệ chính, tích hợp nhiều tính năng như quản lý bài viết, quản lý người dùng, và tạo slug tự động.
Công nghệ sử dụng

Backend: Node.js, Express
Cơ sở dữ liệu: MongoDB (với Mongoose)
Template Engine: Express-Handlebars
Xác thực và bảo mật: bcrypt, jsonwebtoken, express-session, connect-flash
Xử lý CSS: Sass
Công cụ hỗ trợ: Prettier, Husky, Nodemon, Morgan

Tính năng chính

Quản lý bài viết: Tạo, chỉnh sửa, xóa bài viết.
Quản lý người dùng: Đăng ký, đăng nhập, phân quyền.
Tạo slug tự động cho bài viết với mongoose-slug-generator và mongoose-slug-updater.
Hỗ trợ định dạng code và linting với Prettier và Husky.

Cài đặt và chạy dự án
Yêu cầu

Node.js (phiên bản 14 trở lên)
MongoDB (đã cài đặt và chạy local hoặc trên cloud)
npm (đi kèm với Node.js)

Các bước cài đặt

Clone repository về máy:git clone <repository-url>
cd blog


Cài đặt các dependencies:npm install


Tạo file .env trong thư mục gốc và cấu hình các biến môi trường, ví dụ:PORT=3000
MONGODB_URI=mongodb://localhost:27017/blog
SESSION_SECRET=your_secret_key


Chạy dự án:
Chạy ở chế độ development với nodemon:npm start


Theo dõi và biên dịch Sass:npm run watch





Scripts

npm start: Khởi động server với nodemon và hỗ trợ debug.
npm run watch: Theo dõi và biên dịch file Sass thành CSS.
npm run beautiful: Định dạng code với Prettier.
npm test: Kiểm tra (hiện chưa có test).

Dependencies chính

express: Framework chính để xây dựng ứng dụng.
mongoose: Quản lý cơ sở dữ liệu MongoDB.
express-handlebars: Template engine để render giao diện.
bcrypt, jsonwebtoken: Xử lý mật khẩu và xác thực.
sass: Biên dịch SCSS thành CSS.

Dev Dependencies

nodemon: Tự động restart server khi có thay đổi.
prettier, husky, lint-staged: Định dạng và kiểm tra code.
morgan: Ghi log các request HTTP.

Tác giả

Nam Dương

Giấy phép
Dự án được phát hành dưới giấy phép ISC.
Liên hệ
Nếu có thắc mắc, vui lòng liên hệ qua email: nam95218@gmail.com
