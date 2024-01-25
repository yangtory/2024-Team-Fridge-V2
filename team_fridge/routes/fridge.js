import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("fridge/add");
});

router.get("/add_fridge", (req, res) => {
  return res.render("fridge/add_fridge");
});

router.get("/shopmemo", (req, res) => {
  return res.render("fridge/shopmemo");
});

export default router;
