import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/contact", async (req, res) => {
  try {
    const response = await fetch(
      process.env.GOOGLE_SCRIPT_URL,
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

// Em vez de listen, exporte o handler padrão
export default app;
