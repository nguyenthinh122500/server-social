const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Images.init(sequelize, DataTypes);
}

class Images extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    imageID: {
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
    },
    imageURL: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Images',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "imageID" },
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
