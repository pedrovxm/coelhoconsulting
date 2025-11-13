export default async function handler(req, res) {
  const allowedOrigins = [
    "https://coelhoconsulting-n97ccd6rm-pedros-projects-a382e0f3.vercel.app", // seu front-end
    "https://coelhoconsulting.vercel.app" // domínio principal (opcional)
  ];

  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // Preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // Aqui vem a lógica da sua API
  if (req.method === "POST") {
    const body = req.body;
    console.log("Dados recebidos:", body);

    // Exemplo de resposta:
    return res.status(200).json({ message: "Requisição recebida com sucesso!" });
  }

  return res.status(405).json({ message: "Método não permitido" });
}
