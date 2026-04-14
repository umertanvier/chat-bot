const express = require("express");
const path = require("path");

const app = express();

// 🔥 Azure port fix
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// 🔥 debug log
console.log("APP STARTING...");

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

// start server (IMPORTANT for Azure)
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on port " + PORT);
});