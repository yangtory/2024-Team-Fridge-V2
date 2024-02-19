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
  return res.render("fridge/list_fridge", { FR: rows });
});

router.get("/:f_seq/fridge_update", async (req, res) => {
  const f_seq = req.params.f_seq;

  try {
    const row = await FRIDGE.findByPk(f_seq);
    return res.render("fridge/add_fridge", { FR: row });
  } catch (error) {
    return res.json(error);
  }
});
router.post("/:f_seq/fridge_update", upLoad.single("f_photo"), async (req, res) => {
  const f_seq = req.params.f_seq;
  const data = req.body;
  const file = req.file;
  if (file) {
    req.body.f_image_name = file.filename;
    req.body.f_image_origin_name = file.originalname;
  }

  try {
    await FRIDGE.update(data, {
      where: { f_seq: f_seq },
    });
    console.log(FRIDGE);
    return res.redirect("/");
  } catch (error) {
    return res.json(error);
  }
});

router.post("/add_fridge", upLoad.single("f_photo"), async (req, res) => {
  const data = req.body;
  const file = req.file;
  if (file) {
    req.body.f_image_name = file.filename;
    req.body.f_image_origin_name = file.originalname;
  }
  try {
    await FRIDGE.create(data);
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
  const row = await FOOD.findByPk(p_seq);
  try {
    await FOOD.destroy({
      where: { p_seq },
    });
    return res.redirect(`/fridge/${row.p_fseq}/fridge_list`);
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:f_seq/fridge_delete", async (req, res) => {
  const f_seq = req.params.f_seq;
  try {
    await FOOD.destroy({
      where: { p_fseq: f_seq },
    });
    await FRIDGE.destroy({
      where: { f_seq },
    });
    return res.redirect("/fridge/list_fridge");
  } catch (error) {
    return res.json(error);
  }
});

router.get("/:f_seq/add_food", async (req, res) => {
  const f_seq = req.params.f_seq;
  const row = await FRIDGE.findByPk(f_seq);
  return res.render("fridge/add_food", { food: row });
});

router.post("/:f_seq/add_food", async (req, res) => {
  const f_seq = req.params.f_seq;
  const data = req.body;
  await FRIDGE.findByPk(f_seq, {
    include: {
      model: FOOD,
      as: "F_음식",
    },
  });
  try {
    await FOOD.create(data);
    return res.redirect(`/fridge/${f_seq}/fridge_list`);
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
  // return res.render("fridge/shopmemo", { SHOPPING: rows, SHOPPING2: rows2 });

  const rows = await FRIDGE.findAll();
  return res.render("fridge/shopsave", { FR: rows });
});
router.get("/shopmemo/:f_seq/save", async (req, res) => {
  try {
    const f_seq = req.params.f_seq;
    await SHOPPING.update({ s_fseq: f_seq }, { where: { s_ox: 1 } });
    const rows2 = await SHOPPING.findAll({ where: { s_ox: 1 } });
    for (let item of rows2) {
      // 각 항목의 데이터를 사용하여 FOOD 테이블에 새 항목 생성
      await FOOD.create({
        p_fseq: f_seq,
        p_name: item.s_name,
        p_quan: item.s_quan,
      });
    }
    await SHOPPING.update({ s_ox: 0 }, { where: { s_ox: 1 } });
    return res.redirect("/fridge/shopmemo");
  } catch (error) {
    return res.json(error);
  }
});
// ============================

export default router;
