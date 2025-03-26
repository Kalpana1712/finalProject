import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.GOOGLE_TRANSLATE_API_KEY;
const GOOGLE_TRANSLATE_URL = "https://translation.googleapis.com/language/translate/v2";

export const translateText = async (text, targetLanguage) => {
  try {
    const response = await axios.post(
      GOOGLE_TRANSLATE_URL,
      {},
      {
        params: {
          q: text,
          target: targetLanguage,
          key: API_KEY,
        },
      }
    );

    return response.data.data.translations[0].translatedText;
  } catch (error) {
    console.error("Translation Error:", error.response?.data || error.message);
    return text; // Fallback to original text if translation fails
  }
};
