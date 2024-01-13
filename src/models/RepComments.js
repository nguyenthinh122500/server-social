const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return RepComments.init(sequelize, DataTypes);
}

class RepComments extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    repCommentID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    commentID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Comments',
        key: 'commentID'
      }
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
    }
  }, {
    sequelize,
    tableName: 'RepComments',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "repCommentID" },
        ]
      },
      {
        name: "commentID",
        using: "BTREE",
        fields: [
          { name: "commentID" },
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
