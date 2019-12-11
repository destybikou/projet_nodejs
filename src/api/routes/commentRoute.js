module.exports = (app) => {
  const commentController = require('../controllers/commentController');

  app.route('/posts/:post_id/comments')
  .get(commentController.get_all_comments)
  .post(commentController.create_a_comment);

  app.route('/comments/:comment_id')
  .get(commentController.get_a_comment)
  .put(commentController.update_a_comment)
  .delete(commentController.delete_a_comment);
}
