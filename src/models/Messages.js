const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  return Messages.init(sequelize, DataTypes);
}

class Messages extends Sequelize.Model {
  static init(sequelize, DataTypes) {
  return super.init({
    messageID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    senderID: {
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
    sentAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Messages',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "messageID" },
        ]
      },
      {
        name: "senderID",
        using: "BTREE",
        fields: [
          { name: "senderID" },
        ]
      },
    ]
  });
  }
}
