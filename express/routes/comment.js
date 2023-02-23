const router = require("express").Router();
const Comment = require("../models/comment");
const jwt = require("jsonwebtoken");

router.post("/comment", async (req, res) => {
  try {
    const tempUserName = jwt.verify(
      req.cookies.login_success,
      process.env.COOKIE_SECRET
    );
    await Comment.create({
      text: req.body.text,
      userName: tempUserName.userName,
    });
    // const tempCommentList = await Comment.findAll();
    // res.send({ list: tempCommentList });
    res.end();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/commentlist", async (req, res) => {
  const tempList = await Comment.findAll();
  res.send({ list: tempList });
});

module.exports = router;
