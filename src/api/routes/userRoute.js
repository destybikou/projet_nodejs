module.exports = (app) => {
  const userController = require('../controllers/userController');

  app.post('/register', userController.user_register);
  app.post('/login', userController.user_login);
}
