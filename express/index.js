const express = require("express");
const session = require("express-session");
const dotenv = require("dotenv");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

const routes = require("./routes/index.js");

const app = express();

const db = require("./models/index.js");
const { sequelize } = require("./models/index.js");

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
// 멀터로 저장한 파일을 연결해주는 라이브러리

dotenv.config();

app.set("port", process.env.PORT || 8080);

app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// app.use("/uploads", express.static("uploads"));

app.use((req, res, next) => {
  if (process.env.NODE_ENV === "production") morgan("combined")(req, res, next);
  else morgan("dev")(req, res, next);
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false,
    },
    name: "session",
  })
);

db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", routes);

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "번 포트에 서버 오픈");
});
