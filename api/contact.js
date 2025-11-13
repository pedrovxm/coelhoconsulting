import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { createServerlessHandler } from "@vercel/node";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby_l0NfBr40EIDT51tkHs-JNhuyMOZHJUP0V1jasztGGuigdnFjwMpYcKgfEx7r0Pqf/exec",
      {
        method: "POST",
        body: JSON.stringify(req.body),
        headers: { "Content-Type": "application/json" },
      }
    );

    const text = await response.text();
    res.json({ success: true, message: "Dados enviados com sucesso!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Erro ao enviar dados." });
  }
});

// Exporta o handler para Vercel
export default createServerlessHandler(app);