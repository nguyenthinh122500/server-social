const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return PostLikes.init(sequelize, DataTypes);
}

class PostLikes extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    likeID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    postID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Posts',
        key: 'postID'
      }
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'userID'
      }
    }
  }, {
    sequelize,
    tableName: 'PostLikes',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "likeID" },
        ]
      },
      {
        name: "postID",
        using: "BTREE",
        fields: [
          { name: "postID" },
        ]
      },
      {
        name: "userID",
        using: "BTREE",
        fields: [
          { name: "userID" },
        ]
      },
    ]
  });
  }
}
