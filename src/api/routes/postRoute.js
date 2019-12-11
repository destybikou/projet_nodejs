module.exports = (app) => {
  const postController = require('../controllers/postController');

  app.route('/posts')
  .get(postController.list_all_posts)
  .post(postController.create_a_post)
}
