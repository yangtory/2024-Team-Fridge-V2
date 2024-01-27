import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("./calendar/calendar.pug");
});

router.get(`/:day/detail`, (req, res) => {
  const param = req.params.day;

  return res.render("./calendar/detail.pug", [param]);
});

export default router;
