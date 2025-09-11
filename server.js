const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage (resets when server restarts)
let contactMessages = [];
let chatLogs = [];

// Contact form route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const newMessage = {
    id: contactMessages.length + 1,
    name,
    email,
    message,
    created_at: new Date()
  };

  contactMessages.push(newMessage);
  res.json({ ok: true, id: newMessage.id });
});

// Chatbot route
app.post('/chat', (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Missing message' });

  const msg = message.toLowerCase();
  let reply = 'Try deep breathing: inhale 4s, hold 4s, exhale 6s.';

  if (msg.includes('study'))
    reply = 'Try Pomodoro: 25 minutes focus, 5 minutes break. Break tasks into small steps.';
  if (msg.includes('sleep'))
    reply = 'Sleep tip: reduce screen time before bed, keep room cool and dark, try a breathing exercise.';
  if (msg.includes('suicid') || msg.includes('kill') || msg.includes('end'))
    reply = 'If you feel unsafe, call KIRAN 1800-599-0019 or your local emergency number immediately.';

  chatLogs.push({
    user_text: message,
    reply_text: reply,
    created_at: new Date()
  });

  res.json({ ok: true, text: reply });
});

// Admin route to view contact messages
app.get('/admin/messages', (req, res) => {
  res.json({ ok: true, items: contactMessages });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on http://localhost:' + PORT));
