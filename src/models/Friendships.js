const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Friendships.init(sequelize, DataTypes);
}

class Friendships extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    friendshipID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userID1: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'userID'
      }
    },
    userID2: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Users',
        key: 'userID'
      }
    },
    Status: {
      type: DataTypes.ENUM('Pending','Accepted','Rejected'),
      allowNull: true,
      defaultValue: "Pending"
    }
  }, {
    sequelize,
    tableName: 'Friendships',
    timestamps: true,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "friendshipID" },
        ]
      },
      {
        name: "userID1",
        using: "BTREE",
        fields: [
          { name: "userID1" },
        ]
      },
      {
        name: "userID2",
        using: "BTREE",
        fields: [
          { name: "userID2" },
        ]
      },
    ]
  });
  }
}
