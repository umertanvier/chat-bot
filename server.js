const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("public")); // ✅ correct folder
app.use(express.json());

// simple chatbot logic
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

// chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  const reply = botReply(userMessage);

  res.json({ reply });
});

// ✅ FIX: serve frontend properly
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});