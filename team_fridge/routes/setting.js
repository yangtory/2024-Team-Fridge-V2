import express from "express";
import DB from "../setting_config/mysql.js";

const router = express.Router();

let dbConn = null;

DB.init().then((connection) => {
  dbConn = connection;
});

router.get("/", (req, res) => {
  res.render("setting/setting");
});

router.get("/login", (req, res) => {
  res.render("setting/login");
});

router.get("/join", (req, res) => {
  res.render("setting/join");
});

router.post("/join", (req, res) => {
  const sql = " INSERT INTO tbl_user SET ? ";
  const params = {
    username: req.body.username,
    userid: req.body.userid,
    password: req.body.password,
  };
  dbConn
    .query(sql, params)
    .then((_) => {
      return res.redirect("/setting/login");
    })
    .catch((err) => {
      return res.render(err);
    });
});

export default router;
