import express from "express";
import dbCreate from "../config/mysql.js";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("fridge/add");
});

router.get("/add_fridge", (req, res) => {
  return res.render("fridge/add_fridge");
});

router.get("/shopmemo", (req, res) => {
  return res.render("fridge/shopmemo");
});

router.post("/add_fridge", (req, res) => {
  const fr_photo = req.body.photo;
  const fr_fresh = req.body.fresh;
  const fr_cold = req.body.cold;
  const fr_out = req.body.out;
  const fr_name = req.body.f_name;
  const fr_memo = req.body.f_memo;

  const params = [fr_photo, fr_fresh, fr_cold, fr_out, fr_name, fr_memo];
  console.log(params);
  // const sql = "INSERT INTO tbl_fridge(fr_photo, fr_fresh, fr_cold, fr_out, fr_name, fr_memo) " + "VALUES (?,?,?,?,?,?)";
  // dbCreate.query(sql, params, (err, result) => {
  //   if (err) {
  //     return res.json(err);
  //   } else {
  //     return res.render("/fridge/list_fridge");
  //   }
});
// });

export default router;
