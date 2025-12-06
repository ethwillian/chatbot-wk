const express = require("express");
const app = express();
const Twilio = require("twilio");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("WKagency WhatsApp Bot is running! 🚀");
});

app.post("/webhook", async (req, res) => {
  const twiml = new Twilio.twiml.MessagingResponse();
  const msg = req.body.Body?.toLowerCase() || "";

  console.log("Mensagem recebida:", msg);

  let resposta = "";

  if (msg.includes("oi") || msg.includes("olá") || msg.includes("boa")) {
    resposta =
      "👋 Olá! Aqui é o *WKagency Bot* 🚀\nComo posso te ajudar hoje?\n\n1️⃣ Serviços de criação\n2️⃣ Sites premium\n3️⃣ WK COGNITIONX (IA avançada)\n4️⃣ Orçamentos\n\nDigite o número desejado.";
  } else if (msg.includes("1")) {
    resposta =
      "🎨 *Serviços de Criação WKagency*\nLogo, identidade visual, social media, edição e muito mais! Quer ver o portfólio?";
  } else if (msg.includes("2")) {
    resposta =
      "💻 *Sites Premium WKagency*\nLanding pages, cardápios digitais, sistemas de reservas e muito mais!";
  } else if (msg.includes("3")) {
    resposta =
      "🤖 *WKCognitionX — IA Avançada*\nAutomação, criação de conteúdos, bots inteligentes e soluções personalizadas!";
  } else if (msg.includes("4")) {
    resposta =
      "📄 *Orçamentos WKagency*\nMe envie o que você precisa e preparo tudo pra você!";
  } else {
    resposta =
      "✨ Não entendi muito bem… mas estou aqui para ajudar! Envie o número da opção desejada.";
  }

  twiml.message(resposta);
  res.type("text/xml").send(twiml.toString());
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🔥 WK Bot rodando na porta ${PORT}`));
