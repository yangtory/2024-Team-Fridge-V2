import express from "express";
import DB from "../config/mysql.js";

const router = express.Router();
const dbConn = DB.init();

router.get("/", (req, res) => {
  return res.render("fridge/add");
});

router.get("/add_fridge", (req, res) => {
  return res.render("fridge/add_fridge");
});

router.get("/list_fridge", (req, res) => {
  const sql = " SELECT * FROM tbl_fridge ";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json();
    } else {
      return res.render("fridge/list_fridge", { FR: result });
    }
  });
});

router.get("/shopmemo", (req, res) => {
  const sql = " SELECT * FROM tbl_templist";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json();
    } else {
      return res.render("fridge/shopmemo", { templist: result });
    }
  });
});
router.post("/shopmemo", (req, res) => {
  const t_name = req.body.t_name;
  const t_quan = req.body.t_quan;
  const params = [t_name, t_quan];
  const sql = "INSERT INTO tbl_templist (t_name, t_quan) VALUES (?, ?)";
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return console.error(err);
    } else {
      return res.redirect("/fridge/shopmemo");
    }
  });
});

router.get("/shopmemo/deleteAll", (req, res) => {
  const sql = " TRUNCATE tbl_templist";
  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json();
    } else {
      return res.redirect("/fridge/shopmemo");
    }
  });
});

// ============================

router.get("/shopmemo/:t_num/delete", (req, res) => {
  const t_num = req.params.t_num;
  const sql = "DELETE FROM tbl_templist WHERE t_num = ?";

  dbConn.query(sql, t_num, (err, result) => {
    if (err) {
      return res.json();
    } else {
      return res.redirect("/fridge/shopmemo");
    }
  });
});

// ============================

router.post("/add_fridge", (req, res) => {
  const f_photo = req.body.f_photo;
  const f_div = req.body.f_div;
  const f_name = req.body.f_name;
  const f_memo = req.body.f_memo;

  const params = [f_photo, f_div, f_name, f_memo];

  const sql = "INSERT INTO tbl_fridge(f_photo, f_div, f_name, f_memo) " + " VALUES (?,?,?,?) ";
  console.log(params);
  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.redirect("/fridge/list_fridge");
    }
  });
});

router.get("/fridge_list", (req, res) => {
  const sql = " SELECT * FROM tbl_food ";

  dbConn.query(sql, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      // return res.json(result[0]);
      return res.render("fridge/fridge_list", { food: result });
    }
  });
});

router.get("/:p_num/fridge_detail", (req, res) => {
  const p_num = req.params.p_num;
  const params = [p_num];
  const sql = " SELECT * FROM tbl_food WHERE p_num = ? ";

  dbConn.query(sql, params, (err, result) => {
    if (err) {
      return res.json(err);
    } else {
      return res.render("fridge/fridge_detail", { FOOD: result });
    }
  });
});

router.get("/add_food", (req, res) => {
  return res.render("/fridge/add_food");
});

export default router;
