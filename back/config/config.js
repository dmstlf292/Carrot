//npm run dev 실행하기 전에 sequelize db:create 디비 먼저 만들고 실행하기
const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: 'react-nodebird',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
};
