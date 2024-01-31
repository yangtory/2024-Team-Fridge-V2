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
      return res.render("alarm/alarm.pug", { result: result });
    }
  });
});

// router.get("/:foodName/detail", async (req, res) => {
//   const foodName = req.params.foodName;
//   try {
//     const row = await fridge.findByPk(foodName);
//     return res.render("alarm/detail", { food: row });
//   } catch (error) {
//     return res.json(error);
//   }
// });
router.get("/:p_num/detail", (req, res) => {
  const f_num = req.params.p_num;
  const sql = " SELECT * FROM tbl_food WHERE p_num = ? ";
  const params = [f_num];
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result);
      return res.render("alarm/detail", { result: result[0] });
    }
  });
});

router.get("/add_food", (req, res) => {
  return res.render("alarm/add_food");
});

// router.post("/fridge_list/add_food", (req, res) => {
//   return res.redirect("alarm/add_food");
// });

export default router;
