import express from "express";
import { translateText } from "../utils/translate.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { text, targetLanguage } = req.body;

  if (!text || !targetLanguage) {
    return res.status(400).json({ error: "Text and targetLanguage are required" });
  }

  try {
    const translatedText = await translateText(text, targetLanguage);
    res.json({ translatedText });
  } catch (error) {
    res.status(500).json({ error: "Translation failed" });
  }
});

export default router;
