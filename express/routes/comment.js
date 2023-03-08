const router = require("express").Router();
const Comment = require("../models/comment");
const UserInfo = require("../models/userInfo");
const Board = require("../models/board");
const jwt = require("jsonwebtoken");

router.post("/comment", async (req, res) => {
  try {
    const tempUserName = jwt.verify(
      req.cookies.login_success,
      process.env.COOKIE_SECRET
    );

    const tempUser = await UserInfo.findOne({
      where: { userName: tempUserName.userName },
    });

    const tempBoard = await Board.findOne({
      where: { id: req.body.id },
    });

    const tempComment = await Comment.create({
      text: req.body.text,
    });

    tempUser.addComment(tempComment);
    tempBoard.addComment(tempComment);

    const tempCommentList = await Comment.findAll();
    res.send({ list: tempCommentList });
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/commentlist", async (req, res) => {
  const tempList = await Comment.findAll();
  res.send({ list: tempList });
});

router.post("/deletecomment", async (req, res) => {
  await Comment.destroy({ where: { id: req.body.id } });
  res.end();
});

module.exports = router;
