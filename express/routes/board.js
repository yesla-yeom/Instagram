const router = require("express").Router();
const Board = require("../models/board");
const jwt = require("jsonwebtoken");

router.post("/post", async (req, res) => {
  try {
    const tempUserName = jwt.verify(
      req.cookies.login_success,
      process.env.COOKIE_SECRET
    );

    await Board.create({
      title: req.body.title,
      text: req.body.text,
      userName: tempUserName.userName,
    });
    res.end();
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

router.post("/list", async (req, res) => {
  const tempList = await Board.findAll();
  res.send({ list: tempList });
  // list: <= 이런 버릇 들이기
});

router.post("/delete", async (req, res) => {
  await Board.destroy({ where: { id: req.body.id } });
  res.end();
});

router.post("/textdetail", async (req, res) => {
  const textDetail = await Board.findOne({ where: { id: req.body.postId } });
  res.send(textDetail);
});

router.post("/edit", async (req, res) => {
  await Board.update(
    { title: req.body.title, text: req.body.text },
    { where: { id: req.body.postId } }
    // axios에서 요청한 애들 주기
  );
  res.end();
});

module.exports = router;
