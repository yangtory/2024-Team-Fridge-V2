import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("/fridge/setting");
});

export default router;
