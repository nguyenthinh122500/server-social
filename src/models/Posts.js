const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Posts.init(sequelize, DataTypes);
}

class Posts extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    postID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'userID'
      }
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    likesCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'Posts',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
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
