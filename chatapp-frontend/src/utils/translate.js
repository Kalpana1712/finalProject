import axios from "axios";

const BACKEND_URL = "http://localhost:3000"; // Change this if deployed

export const translateMessage = async (text, targetLang = "en") => {
  try {
    const response = await axios.post(`${BACKEND_URL}/api/v1/translate`, {
      text,
      targetLang, // Fix: Ensure correct key name
    });

    return response.data.translatedText;
  } catch (error) {
    console.error("Translation Error:", error.response?.data || error.message);
    return text; // Fallback to original text if translation fails
  }
};
