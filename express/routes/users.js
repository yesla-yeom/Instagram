import { Router } from "express";
// import crypto from "crypto-js";

const router = require("express").Router();
const userArr = [];
// const user = {};

router.post("/regist", (req, res) => {
  if (userArr.find((item) => item.userId == req.body.userId)) res.end();
  else {
    userArr.push(req.body);
    res.end();
  }
});

module.exports = router;
