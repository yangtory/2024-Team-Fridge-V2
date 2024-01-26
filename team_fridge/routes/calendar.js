import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("./calendar/calendar.pug");
});

router.get("/detail", (req, res) => {
  return res.render("./calendar/detail.pug");
});

export default router;
