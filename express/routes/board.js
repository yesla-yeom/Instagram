const router = require("express").Router();
const Board = require("../models/board");
const jwt = require("jsonwebtoken");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/post", upload.single("photoUpload"), async (req, res) => {
  try {
    const tempUserName = jwt.verify(
      req.cookies.login_success,
      process.env.COOKIE_SECRET
    );
    await Board.create({
      photo: req.file.filename,
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
  const list = await Board.findAll();
  res.send({ list: list });
});

router.post("/delete", async (req, res) => {
  const tempUserName = jwt.verify(
    req.cookies.login_success,
    process.env.COOKIE_SECRET
  );
  const tempId = await Board.findOne({ where: { id: req.body.id } });
  if (tempUserName.userName == tempId.userName) {
    await Board.destroy({ where: { id: req.body.id } });
    res.send({ msg: "same" });
  } else {
    res.send({ msg: "dif" });
  }
});

router.post("/textdetail", async (req, res) => {
  const textDetail = await Board.findOne({ where: { id: req.body.postId } });
  res.send(textDetail);
});

router.post("/editcheck", async (req, res) => {
  const textDetail = await Board.findOne({ where: { id: req.body.postId } });
  if (textDetail.userName != req.body.userName) res.send({ msg: "dif" });
  else res.send({ msg: "same" });
});

router.post("/edit", async (req, res) => {
  await Board.update(
    { title: req.body.title, text: req.body.text },
    { where: { id: req.body.postId } }
  );
  res.end();
});

module.exports = router;
