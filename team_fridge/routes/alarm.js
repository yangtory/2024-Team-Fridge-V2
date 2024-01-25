import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("alarm/alarm");
});

export default router;
