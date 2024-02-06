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
    req.body.ps_role = "USER";
    const result = await USER.create(req.body);
    return res.redirect("/setting/login");
  } else {
    req.body.ps_role = "ADMIN";
  }
  const username = req.body.ps_name;
  const userid = req.body.ps_id;
  const password = req.body.ps_pw;

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

router.get("/:ps_id/check", async (req, res) => {
  const userid = req.params.ps_id;
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

// `npm install express-session` 해줘야 실행됨.
router.post("/login", async (req, res) => {
  const userid = req.body.ps_id;
  const password = req.body.ps_pw;
  const result = await USER.findByPk(userid);
  if (!result) {
    return res.redirect(`/setting/login?fail=${LOGIN_MESSAGE.USER_NOT}`);
  } else if (result.ps_id === userid && result.ps_pw !== password) {
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
