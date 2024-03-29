import express from "express";
import db from "../models/index.js";
import { Op } from "sequelize";
import moment from "moment";
const USER = db.models.tbl_user;
const PRODUCT = db.models.tbl_product;
const FRIDGE = db.models.tbl_fridge;

const router = express.Router();

router.get("/", async (req, res) => {
  const rows = await USER.findAll();
  const rowss = await PRODUCT.findAll();
  return res.render("setting/setting", { userId: rows, product: rowss });
});

router.get("/join", (req, res) => {
  res.render("setting/join");
});

router.post("/join", async (req, res) => {
  try {
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

    const result = await USER.create({ u_name: username, u_id: userid, u_pw: password, u_role: req.body.u_role });
    return res.redirect("/setting/login");
  } catch (error) {
    return res.json(error);
  }
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

router.get("/count", async (req, res) => {
  const exdate = moment().add(10, "days").format("YYYY-MM-DD");
  const rows = await PRODUCT.findAll({
    include: {
      model: FRIDGE,
      as: "F_냉장고",
    },
    where: {
      p_exdate: { [Op.lte]: exdate },
    },
    order: [["p_exdate", "ASC"]],
  });
  return res.json({ count: rows.length });
});

export default router;
