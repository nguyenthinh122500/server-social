const DataTypes = require("sequelize").DataTypes;
const _Comments = require("./Comments");
const _Friendships = require("./Friendships");
const _Images = require("./Images");
const _Messages = require("./Messages");
const _Notifications = require("./Notifications");
const _PostLikes = require("./PostLikes");
const _Posts = require("./Posts");
const _RepComments = require("./RepComments");
const _Users = require("./Users");

function initModels(sequelize) {
  const Comments = _Comments(sequelize, DataTypes);
  const Friendships = _Friendships(sequelize, DataTypes);
  const Images = _Images(sequelize, DataTypes);
  const Messages = _Messages(sequelize, DataTypes);
  const Notifications = _Notifications(sequelize, DataTypes);
  const PostLikes = _PostLikes(sequelize, DataTypes);
  const Posts = _Posts(sequelize, DataTypes);
  const RepComments = _RepComments(sequelize, DataTypes);
  const Users = _Users(sequelize, DataTypes);

  RepComments.belongsTo(Comments, { as: "comment", foreignKey: "commentID"});
  Comments.hasMany(RepComments, { as: "RepComments", foreignKey: "commentID"});
  Comments.belongsTo(Posts, { as: "post", foreignKey: "postID"});
  Posts.hasMany(Comments, { as: "Comments", foreignKey: "postID"});
  Images.belongsTo(Posts, { as: "post", foreignKey: "postID"});
  Posts.hasMany(Images, { as: "Images", foreignKey: "postID"});
  PostLikes.belongsTo(Posts, { as: "post", foreignKey: "postID"});
  Posts.hasMany(PostLikes, { as: "PostLikes", foreignKey: "postID"});
  Comments.belongsTo(Users, { as: "user", foreignKey: "userID"});
  Users.hasMany(Comments, { as: "Comments", foreignKey: "userID"});
  Friendships.belongsTo(Users, { as: "userID1_User", foreignKey: "userID1"});
  Users.hasMany(Friendships, { as: "Friendships", foreignKey: "userID1"});
  Friendships.belongsTo(Users, { as: "userID2_User", foreignKey: "userID2"});
  Users.hasMany(Friendships, { as: "userID2_Friendships", foreignKey: "userID2"});
  Images.belongsTo(Users, { as: "user", foreignKey: "userID"});
  Users.hasMany(Images, { as: "Images", foreignKey: "userID"});
  Messages.belongsTo(Users, { as: "sender", foreignKey: "senderID"});
  Users.hasMany(Messages, { as: "Messages", foreignKey: "senderID"});
  Notifications.belongsTo(Users, { as: "user", foreignKey: "userID"});
  Users.hasMany(Notifications, { as: "Notifications", foreignKey: "userID"});
  PostLikes.belongsTo(Users, { as: "user", foreignKey: "userID"});
  Users.hasMany(PostLikes, { as: "PostLikes", foreignKey: "userID"});
  Posts.belongsTo(Users, { as: "user", foreignKey: "userID"});
  Users.hasMany(Posts, { as: "Posts", foreignKey: "userID"});
  RepComments.belongsTo(Users, { as: "user", foreignKey: "userID"});
  Users.hasMany(RepComments, { as: "RepComments", foreignKey: "userID"});

  return {
    Comments,
    Friendships,
    Images,
    Messages,
    Notifications,
    PostLikes,
    Posts,
    RepComments,
    Users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
