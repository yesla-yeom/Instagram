const router = require("express").Router();

const board = require("./board.js");
const comment = require("./comment.js");
const users = require("./users.js");

router.use("/board", board);
router.use("/comment", comment);
router.use("/users", users);

module.exports = router;
