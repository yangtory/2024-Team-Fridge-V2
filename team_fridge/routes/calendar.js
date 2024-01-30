import express, { json } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("./calendar/calendar.pug");
});

router.get(`/:day/detail`, (req, res) => {
  const row = req.params.day;

  return res.render("./calendar/detail.pug", { row: [row] });
});

export default router;
