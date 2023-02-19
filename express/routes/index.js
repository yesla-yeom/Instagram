const router = require("express").Router();

const board = require("./board.js");
const comment = require("./comment.js");
const users = require("./users.js");
// (기능/종류별로 분류하여 0000.js 파일 생성)

router.use("/board", board);
router.use("/comment", comment);
router.use("/users", users);

module.exports = router;
