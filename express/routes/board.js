const router = require("express").Router();

router.post("/post", async (req, res) => {
  console.log(req.body);
  try {
    const Postdata = await BeforeUnloadEvent.findOne({
      where: { id: req.body.id },
      include: [
        {
          model: db.UserInfo,
        },
      ],
    });
    res.send(Postdata);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
