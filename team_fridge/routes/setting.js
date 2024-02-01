import express from "express";
import DB from "../config/mysql.js";

const router = express.Router();

const dbConn = DB.init();

router.get("/", (req, res) => {
  const sql = " SELECT * FROM tbl_user ";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("setting/setting", { userId: result });
    }
  });
});

router.get("/login", (req, res) => {
  res.render("setting/login");
});

router.post("/login", (req, res) => {});

router.get("/join", (req, res) => {
  res.render("setting/join");
});

router.post("/join", (req, res) => {
  const username = req.body.username;
  const userid = req.body.userid;
  const password = req.body.password;

  const params = [username, userid, password];
  const sql = " INSERT INTO tbl_user(ps_name, ps_id, ps_pw) " + " VALUES( ?,?,? ) ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/setting/login");
    }
  });
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.redirect("/");
});

export default router;
