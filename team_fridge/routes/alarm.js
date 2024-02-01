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
  const p_num = req.params.p_num;
  const sql = " SELECT * FROM tbl_food WHERE p_num = ? ";
  const params = [p_num];
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("alarm/detail", { result: result });
    }
  });
});

// router.post("/fridge_list/add_food", (req, res) => {
//   return res.redirect("alarm/add_food");
// });

export default router;
