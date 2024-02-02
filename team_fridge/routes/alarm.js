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

router.get("/:p_num/delete", (req, res) => {
  const p_num = req.params.p_num;
  const sql = " DELETE FROM tbl_food WHERE p_num = ? ";
  dbConn.query(sql, [p_num], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/alarm");
    }
  });
});

router.get("/:p_num/update", (req, res) => {
  const p_num = req.params.p_num;
  const sql = " SELECT * FROM tbl_food WHERE p_num = ? ";
  dbConn.query(sql, [p_num], (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("fridge/add_food", { food: result[0] });
    }
  });
});
router.post("/:p_num/update", (req, res) => {
  const p_num = req.params.p_num;
  const p_exdate = req.body.p_exdate;
  const p_date = req.body.p_date;
  const p_quan = req.body.p_quan;
  const params = [p_exdate, p_date, p_quan, p_num];
  const sql = " UPDATE tbl_food SET p_exdate = ? , p_date = ? , p_quan = ? WHERE p_num = ? ";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect(`/alarm/${p_num}/detail`);
    }
  });
});

export default router;
