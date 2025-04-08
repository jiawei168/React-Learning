import express from "express";
import hotels from "../hote.json";

const router = express.Router();

// 获取所有酒店数据
router.get("/", (req, res) => {
  res.json(hotels);
});

// 根据城市获取酒店数据
router.get("/:city", (req, res) => {
  const city = req.params.city;
  const cityHotels = hotels[city];
  if (cityHotels) {
    res.json(cityHotels);
  } else {
    res.status(404).json({ error: "City not found" });
  }
});

export default router;
