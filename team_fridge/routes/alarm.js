import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("alarm/alarm");
});

// router.get("/:foodName/detail", async (req, res) => {
//   const foodName = req.params.foodName;
//   try {
//     const row = await fridge.findByPk(foodName);
//     return res.render("alarm/detail", { food: row });
//   } catch (error) {
//     return res.json(error);
//   }
// });
router.get("/detail", (req, res) => {
  return res.render("alarm/detail");
});

router.get("/fridge_list", (req, res) => {
  return res.render("alarm/fridge_list");
});

// router.get("/fridge_detail", (req, res) => {
//   return res.render("alarm/fridge_detail");
// });

router.get("/add_food", (req, res) => {
  return res.render("alarm/add_food");
});

// router.post("/fridge_list/add_food", (req, res) => {
//   return res.redirect("alarm/add_food");
// });

export default router;
