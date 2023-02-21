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

module.exports = router;
