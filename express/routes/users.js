const crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

const { UserInfo } = require("../models");

const router = require("express").Router();
// const userArr = [];
// const user = {};

router.post("/regist", async (req, res) => {
  try {
    if (
      await UserInfo.findOne({
        where: { userId: req.body.userId },
      })
    ) {
      res.send("이미 있는 아이디");
    } else {
      await UserInfo.create({
        userId: req.body.userId,
        userPw: crypto.SHA256(req.body.userPw).toString(),
        userName: req.body.userName,
      });
      res.send({ status: 200 });
    }
  } catch (err) {
    console.error(err);
    res.send("failed");
  }
});

router.post("/login", async (req, res) => {
  const logInData = await UserInfo.findOne({
    where: { userId: req.body.userId },
  });
  const userPw = crypto.SHA256(req.body.userPw).toString();
  try {
    if (logInData) {
      if (logInData.userPw == userPw) {
        res.cookie(
          "login_success",
          jwt.sign(
            {
              userId: req.body.userId,
              userName: logInData.userName,
            },
            process.env.COOKIE_SECRET
          ),
          { expires: new Date(Date.now() + 6000 * 300) }
        );
        res.send("로그인 완료");
      } else {
        res.send("비밀번호가 일치하지 않습니다.");
      }
    } else {
      res.send("없는 아이디");
    }
  } catch (err) {
    console.error(err);
    res.send("failed");
  }
});

router.post("/logout", (req, res) => {
  res.clearCookie("login_success");
  res.send({ state: 12341234 });
});

module.exports = router;
