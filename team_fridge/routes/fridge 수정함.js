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
