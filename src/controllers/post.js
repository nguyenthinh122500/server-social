const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const jwt = require("jsonwebtoken");

const moment = require("moment");

const getListPost = async (req, res) => {
  try {
    let posts = await model.Posts.findAll({
      attributes: ["postID", "userID", "content", "likesCount", "createdAt"],
      include: [
        "Images",
        {
          model: model.Comments,
          as: "Comments",
          attributes: ["commentID", "postID", "UserID", "content", "createdAt"],
          include: {
            model: model.RepComments,
            as: "RepComments",
            attributes: [
              "repCommentID",
              "commentID",
              "UserID",
              "content",
              "createdAt",
            ],
          },
        },
      ],
    });

    return res
      .status(200)
      .send({ message: "Lấy danh sách post thành công!!!", posts });
  } catch (error) {
    console.error("Error in getListPost:", error);
    res.status(500).send({ message: "Lỗi Backend" });
  }
};

module.exports = { getListPost };
