export default async function handler(req, res) {
  const allowedOrigins = [
    "https://coelhoconsulting-r3mjtn10p-pedros-projects-a382e0f3.vercel.app", // frontend atual
    "https://coelhoconsulting.vercel.app", // domínio principal, caso use depois
    "http://localhost:3000" // útil para testes locais
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Preflight request (CORS)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Lógica principal da API
  if (req.method === "POST") {
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
      return res.status(200).json({ success: true, message: "Dados enviados com sucesso!" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Erro ao enviar dados." });
    }
  }

  return res.status(405).json({ message: "Método não permitido" });
}
