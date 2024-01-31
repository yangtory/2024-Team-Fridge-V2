import express from "express";
import DB from "../config/mysql.js";
const router = express.Router();
const dbConn = DB.init();
router.get("/", (req, res) => {
  const sql = " SELECT * FROM tbl_food ";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      if (result) {
        return res.render("./calendar/calendar.pug", { result: result });
      }
    }
  });
});

router.get(`/:day/detail`, (req, res) => {
  const row = req.params.day;
  const params = [row];
  const sql = " SELECT * FROM tbl_food WHERE p_date = ? ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else if (result) {
      return res.render("./calendar/detail.pug", { row: params, result: result });
    } else if (!result) {
      alert("구매한 물품이없습니다.");
      return res.redirect("./calendar/calendar.pug");
    }
  });
});

export default router;
