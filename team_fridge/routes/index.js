import express from "express";
import DB from "../models/index.js";
const FRIDGE = DB.models.tbl_fridge;
const router = express.Router();

/* GET home page. */
router.get("/", async (req, res) => {
  const fridge = await FRIDGE.findAll();
  if (!fridge) {
    res.render("index", { message: "냉장고를 추가하세요!" });
  } else if (fridge) {
    res.render("fridge/list_fridge");
  }
});

export default router;
