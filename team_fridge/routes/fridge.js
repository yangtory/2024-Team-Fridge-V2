import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("fridge/add");
});

export default router;
