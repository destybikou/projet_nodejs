module.exports = (app) => {
  const commentController = require('../controllers/commentController');
  const jwtMiddleware = require('../middleware/jwtMiddleware');

  app.route('/posts/:post_id/comments') // req.params.post_id
  .get(commentController.get_all_comments)
  .post(jwtMiddleware.verify_token, commentController.create_a_comment);

  app.route('/comments/:comment_id')
  .all(jwtMiddleware.verify_token)
  .get(commentController.get_a_comment)
  .put(commentController.update_a_comment)
  .delete(commentController.delete_a_comment);
}
