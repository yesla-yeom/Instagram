// import crypto from "crypto-js";

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
        userPw: req.body.userPw,
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
    where: { userId: req.body.id },
  });
  const userPw = crypto.SHA256(req.body.pw).toString();

  try {
    if (logInData) {
      if (logInData.userPw == userPw) {
        res.cookie(
          "login success",
          jwt.sigh(
            {
              userId: req.body.id,
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
  res.clearCookie("individual_login");
  res.send({ state: 12341234 });
});

module.exports = router;
