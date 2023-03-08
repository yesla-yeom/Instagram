const router = require("express").Router();
const Board = require("../models/board");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const { Op } = require("sequelize");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/post", upload.array("photoUpload"), async (req, res) => {
  try {
    const tempUserName = jwt.verify(
      req.cookies.login_success,
      process.env.COOKIE_SECRET
    );
    console.log(req.files.length);
    let tempObj = {};
    for (let i = 0; i < req.files.length; i++) {
      tempObj[`photo${i + 1}`] = req.files[i].filename;
    }

    await Board.create({
      ...tempObj,
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

router.post("/edit", async (req, res) => {
  console.log(req.body);
  await Board.update(
    { title: req.body.title, text: req.body.text },
    { where: { id: req.body.editId } }
  );
  res.end();
});

router.post("/take", async (req, res) => {
  const tempValue = await Board.findOne({
    where: { id: req.body.editId },
  });
  res.send({ tempValue: tempValue });
});

module.exports = router;
