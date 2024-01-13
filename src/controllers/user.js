const sequelize = require("../models/index");
const initModel = require("../models/init-models");
const model = initModel(sequelize);
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const moment = require("moment");

const register = async (req, res) => {
  try {
    const { username, email, password, fullName } = req.body;
    const checkEmail = await model.Users.findOne({ where: { email } });
    if (checkEmail) {
      return res.status(400).send({ message: "Email đã tồn tại!!!" });
    } else if (password.length < 6) {
      return res
        .status(400)
        .send({ message: "Password không ít hơn 6 ký tự!!!" });
    } else {
      const user = await model.Users.create({
        username,
        email,
        password: bcrypt.hashSync(password, 10),
        fullName,
        createDate: moment(),
      });
      const token = jwt.sign({ user }, "SERECT_KEY", { expiresIn: "1d" });
      return res
        .status(200)
        .send({ user, token, message: "Đăng ký tài khoản thành công!!!" });
    }
  } catch (error) {
    return res.status(500).send({ message: "Lỗi Backend!!!" });
  }
};

const login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let user = await model.Users.findOne({ where: { email } });
    if (!user) {
      return res.status(400).send({ message: "Email chưa được đăng ký!!!" });
    } else {
      let checkPass = bcrypt.compareSync(password, user.password);
      if (checkPass) {
        const token = jwt.sign({ user }, "SERECT_KEY", { expiresIn: "1d" });
        return res
          .status(200)
          .send({ user, token, message: "Đăng nhập thành công!!!" });
      } else {
        return res
          .status(400)
          .send({ message: "Mật khẩu không trùng khớp!!!" });
      }
    }
  } catch (error) {
    return res.status(500).send({ message: "Lỗi Backend!!!" });
  }
};

const veryfy = (token) => {
  let check = jwt.verify(token, "SERECT_KEY");
  if (check) {
    return true;
  } else {
    return false;
  }
};

const checkToken = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (!token || !token.startsWith("Bearer ")) {
      return res.status(401).send({ message: "Chưa tìm thấy token" });
    }

    const splitToken = token.split(" ")[1];
    if (veryfy(splitToken)) {
      next();
    } else {
      return res.status(401).send({ message: "Token không đúng định dạng!!!" });
    }
  } catch (error) {
    return res.status(401).send({ message: "Không tìm thấy token!!!" });
  }
};
module.exports = { register, login, checkToken };
