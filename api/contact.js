import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { createServerlessHandler } from "@vercel/node";

const app = express();

// Domínios permitidos (produção + desenvolvimento)
const allowedOrigins = [
  "https://coelhoconsulting-n31y31odm-pedros-projects-a382e0f3.vercel.app", // frontend em produção
  "http://localhost:5173", // frontend local (Vite)
];

// Configuração CORS segura
app.use(
  cors({
    origin: (origin, callback) => {
      // Permitir sem 'origin' (como em requisições do próprio servidor)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const response = await fetch(
      process.env.GOOGLE_SCRIPT_URL ||
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
    console.error("Erro ao enviar dados:", err);
    res.status(500).json({ success: false, message: "Erro ao enviar dados." });
  }
});

// Exporta handler para Vercel
export default createServerlessHandler(app);
