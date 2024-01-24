import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("/fridge/alarm");
});

export default router;
