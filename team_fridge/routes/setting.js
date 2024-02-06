import express from "express";
import DB from "../config/mysql.js";
import db from "../models/index.js";
const USER = db.models.tbl_user;
const dbConn = DB.init();

const router = express.Router();

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

router.get("/join", (req, res) => {
  res.render("setting/join");
});

router.post("/join", async (req, res) => {
  const rows = await USER.findAll();
  if (rows.length > 0) {
    req.body.u_role = "USER";
    const result = await USER.create(req.body);
    return res.redirect("/setting/login");
  } else {
    req.body.u_role = "ADMIN";
  }
  const username = req.body.u_name;
  const userid = req.body.u_id;
  const password = req.body.u_pw;

  const params = [username, userid, password];
  const sql = " INSERT INTO tbl_user(u_name, u_id, u_pw) " + " VALUES( ?,?,? ) ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/setting/login");
    }
  });
});

router.get("/:u_id/check", async (req, res) => {
  const userid = req.params.u_id;
  const row = await USER.findByPk(userid);
  if (row) {
    return res.json({ MESSAGE: "FOUND" });
  } else {
    return res.json({ MESSAGE: "NOT FOUND" });
  }
});

const LOGIN_MESSAGE = {
  USER_NOT: "사용자 ID 없음",
  PASS_WRONG: " 비밀번호 오류",
  NEED_LOGIN: "로그인 필요",
};

router.get("/login", (req, res) => {
  const message = req.query.fail;
  return res.render("setting/login", { NEED: message });
});

router.post("/login", async (req, res) => {
  const userid = req.body.u_id;
  const password = req.body.u_pw;
  const result = await USER.findByPk(userid);
  if (!result) {
    return res.redirect(`/setting/login?fail=${LOGIN_MESSAGE.USER_NOT}`);
  } else if (result.u_id === userid && result.u_pw !== password) {
    return res.redirect(`/setting/login?fail=${LOGIN_MESSAGE.PASS_WRONG}`);
  } else {
    req.session.user = result;
    return res.redirect("/setting");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  return res.redirect("/setting");
});

export default router;
