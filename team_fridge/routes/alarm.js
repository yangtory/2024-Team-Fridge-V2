import express from "express";
import DB from "../models/index.js";
const router = express.Router();
// const dbConn = DB.init();
const FRIDGE = DB.models.tbl_fridge;
const PRODUCT = DB.models.tbl_product;

router.get("/", async (req, res) => {
  // const sql = " SELECT * FROM tbl_product ";
  // dbConn.query(sql, (err, result) => {
  //   if (err) {
  //     return res.json(err);
  //   } else {
  //     return res.render("alarm/alarm.pug", { result: result });
  //   }
  // });

  try {
    const rows = await PRODUCT.findAll();

    return res.render("alarm/alarm", { PRODUCT: rows });
  } catch (error) {
    return res.json(error);
  }
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
router.get("/:p_seq/detail", async (req, res) => {
  const p_seq = req.params.p_seq;
  try {
    const row = await PRODUCT.findByPk(p_seq, {
      include: { model: FRIDGE, as: "tbl_fridges", include: { model: PRODUCT, as: "f_pseq_tbl_product" } },
    });
    // return res.json(row);
    // console.log(row);
    return res.render("alarm/detail", { PRODUCT: row });
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:p_seq/delete", async (req, res) => {
  // const sql = " DELETE FROM tbl_product WHERE p_seq = ? ";
  // dbConn.query(sql, [p_seq], (err, result) => {
  //   if (err) {
  //     return res.json(err);
  //   } else {
  //     return res.redirect("/alarm");
  //   }
  // });
  try {
    const row = await PRODUCT.destroy({
      where: { p_seq: req.params.p_seq },
    });
    return res.redirect("/alarm");
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:p_seq/update", async (req, res) => {
  const p_seq = req.params.p_seq;
  const row = await PRODUCT.findByPk(p_seq);
  return res.render("fridge/add_food", { PRODUCT: row });
});
router.post("/:p_seq/update", async (req, res) => {
  const p_seq = req.params.p_seq;
  const data = req.body;
  // return res.json(data);
  try {
    await PRODUCT.update(data, { where: { p_seq } });
    return res.redirect(`/alarm/${p_seq}/detail`);
  } catch (error) {
    return res.json(error);
  }
});

export default router;
