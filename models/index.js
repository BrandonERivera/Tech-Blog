const User = require('./User');
const Blogpost = require('./Blogpost');
const Comment = require('./Comments')

User.hasMany(Blogpost, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blogpost.belongsTo(User, {
  foreignKey: 'user_id'
});

Blogpost.hasMany(Comment, {
  foreignKey: 'blogpost',
  onDelete: 'CASCADE'
});

Comment.belongsTo(Blogpost,{
  foreignKey: 'blogpost'
});

module.exports = { User, Blogpost, Comment };
