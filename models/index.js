console.log("testUser");
const User = require('./User');
console.log("testUser2");
const Post = require('./Post');
const Comment = require('./Comment');

Post.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

Comment.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Comment,
  Post
};