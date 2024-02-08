import express from "express";
import DB from "../models/index.js";
import { upLoad } from "../modules/file_upload.js";
const FRIDGE = DB.models.tbl_fridge;
const FOOD = DB.models.tbl_product;
const SHOPPING = DB.models.tbl_shopping;

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("fridge/add");
});

router.get("/add_fridge", (req, res) => {
  return res.render("fridge/add_fridge");
});

router.get("/list_fridge", async (req, res) => {
  const rows = await FRIDGE.findAll();
  // return res.json(rows);
  return res.render("fridge/list_fridge", { FR: rows });
});

router.post("/add_fridge", upLoad.single("f_photo"), async (req, res) => {
  const data = req.body;
  try {
    await FRIDGE.create(data);
    // return res.json(data);
    return res.redirect("/fridge/list_fridge");
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:f_seq/fridge_list", async (req, res) => {
  const fseq = req.params.f_seq;
  try {
    const rows = await FRIDGE.findByPk(fseq, {
      include: {
        model: FOOD,
        as: "F_음식",
      },
    });
    // return res.json(rows);
    return res.render("fridge/fridge_list", { FOOD: rows });
  } catch (error) {
    res.json(error);
  }
});

router.get("/:p_seq/fridge_detail", async (req, res) => {
  const p_seq = req.params.p_seq;
  try {
    const row = await FOOD.findAll({
      where: { p_seq },
    });
    return res.render("fridge/fridge_detail", { FOOD: row });
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:p_seq/delete", async (req, res) => {
  const p_seq = req.params.p_seq;
  const f_seq = req.body.f_seq;
  try {
    await FOOD.destroy({
      where: { p_seq },
    });
    return res.redirect(`/fridge/${f_seq}/fridge_list`);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/add_food", async (req, res) => {
  const rows = await FOOD.findAll({
    inclued: [{ model: FRIDGE, as: "F_냉장고" }],
  });
  return res.render("fridge/add_food", { food: rows });
});

router.post("/add_food", async (req, res) => {
  const data = req.body;
  try {
    await FOOD.create(data, {
      inclue: [{ model: FRIDGE, as: "F_food" }],
      where: { p_fseq: req.body.f_seq },
    });
    return res.redirect("/fridge/fridge_list");
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:p_seq/update", async (req, res) => {
  const p_seq = req.params.p_seq;
  try {
    const row = await FOOD.findByPk(p_seq);
    return res.render("fridge/add_food", { food: row });
  } catch (error) {
    return res.json(err);
  }
});
router.post("/:p_seq/update", async (req, res) => {
  const data = req.body;
  const p_seq = req.params.p_seq;
  try {
    await FOOD.update(data, { where: { p_seq: p_seq } });
    return res.redirect(`/fridge/${p_seq}/fridge_detail`);
  } catch (error) {
    return res.json(error);
  }
});

// ============================

router.get("/shopmemo", async (req, res) => {
  try {
    const rows = await SHOPPING.findAll({ where: { s_ox: null } });
    const rows2 = await SHOPPING.findAll({ where: { s_ox: 1 } });

    return res.render("fridge/shopmemo", { SHOPPING: rows, SHOPPING2: rows2 });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

router.post("/shopmemo", async (req, res) => {
  try {
    await SHOPPING.create(req.body);
    return res.redirect("/fridge/shopmemo");
  } catch (error) {
    return res.json(err);
  }
});

router.get("/shopmemo/deleteAll", async (req, res) => {
  try {
    await SHOPPING.update({ s_ox: 0 }, { where: { s_ox: null } });
    return res.redirect("/fridge/shopmemo");
  } catch (error) {
    return res.json(error);
  }
});

router.get("/shopmemo/:s_seq/delete", async (req, res) => {
  const s_seq = req.params.s_seq;
  try {
    await SHOPPING.update({ s_ox: 0 }, { where: { s_seq: s_seq, s_ox: null } });
    return res.redirect("/fridge/shopmemo");
  } catch (error) {
    return res.json(error);
  }
});

//여기까지 수정함...
router.get("/shopmemo/:s_seq/:s_ox?/add", async (req, res) => {
  try {
    const s_seq = req.params.s_seq;
    const s_ox = req.params.s_ox;

    if (s_ox === "1") {
      await SHOPPING.update({ s_ox: null }, { where: { s_seq: s_seq, s_ox: 1 } });
      return res.redirect("/fridge/shopmemo");
    } else {
      await SHOPPING.update({ s_ox: 1 }, { where: { s_seq: s_seq, s_ox: null } });
      return res.redirect("/fridge/shopmemo");
    }
  } catch (error) {
    return res.json(error);
  }
});
router.get("/shopmemo/:s_seq//add", async (req, res) => {
  try {
    const s_seq = req.params.s_seq;
    const s_ox = req.params.s_ox;

    if (s_ox === "1") {
      await SHOPPING.update({ s_ox: null }, { where: { s_seq: s_seq, s_ox: 1 } });
      return res.redirect("/fridge/shopmemo");
    } else {
      await SHOPPING.update({ s_ox: 1 }, { where: { s_seq: s_seq, s_ox: null } });
      return res.redirect("/fridge/shopmemo");
    }
  } catch (error) {
    return res.json(error);
  }
});

router.get("/shopmemo/save", async (req, res) => {
  //어떻게 할지까먹어서 나중에 생각나면 할것.
  // 저장버튼을 누르면 쇼핑테이블에있는 데이터들이 자동으로 냉장고 테이블과 연동됨.
  res.redirect("/fridge/shopmemo");
});
// ============================
export default router;
