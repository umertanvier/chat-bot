const express = require("express");
const path = require("path");

const app = express();

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

// chatbot logic
function botReply(message) {
  message = message.toLowerCase();

  if (message.includes("hello")) {
    return "Hello! 👋 I am your Azure chatbot";
  }

  if (message.includes("azure")) {
    return "Azure is Microsoft's cloud platform ☁️";
  }

  if (message.includes("vm")) {
    return "VM means Virtual Machine in cloud computing.";
  }

  return "I don't understand that yet 🤔";
}

// API route
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  const reply = botReply(userMessage);

  res.json({ reply });
});

// frontend route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// 🔥 IMPORTANT: Azure compatible port
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});