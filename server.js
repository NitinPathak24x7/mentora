const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));

// SQLite setup (file-based)
const fs = require('fs');
const dbDir = path.join(__dirname,'data');
if(!fs.existsSync(dbDir)) fs.mkdirSync(dbDir);
const sqlite3 = require('sqlite3').verbose();
const dbPath = path.join(dbDir,'mentora.db');
const db = new sqlite3.Database(dbPath);
db.serialize(()=>{
  db.run('CREATE TABLE IF NOT EXISTS contact_messages (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, email TEXT, message TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)');
  db.run('CREATE TABLE IF NOT EXISTS chat_logs (id INTEGER PRIMARY KEY AUTOINCREMENT, user_text TEXT, reply_text TEXT, created_at DATETIME DEFAULT CURRENT_TIMESTAMP)');
});
app.post('/contact',(req,res)=>{
  const {name,email,message} = req.body;
  if(!name||!email||!message) return res.status(400).json({error:'Missing fields'});
  db.run('INSERT INTO contact_messages (name,email,message) VALUES (?,?,?)',[name,email,message],function(err){
    if(err) return res.status(500).json({error:'DB error'});
    res.json({ok:true, id:this.lastID});
  });
});
app.post('/chat',(req,res)=>{
  const {message,lang} = req.body;
  if(!message) return res.status(400).json({error:'Missing message'});
  const msg = message.toLowerCase();
  let reply = 'Try deep breathing: inhale 4s, hold 4s, exhale 6s.';
  if(msg.includes('study')) reply = 'Try Pomodoro: 25 minutes focus, 5 minutes break. Break tasks into small steps.';
  if(msg.includes('sleep')) reply = 'Sleep tip: reduce screen time before bed, keep room cool and dark, try a breathing exercise.';
  if(msg.includes('suicid')||msg.includes('kill')||msg.includes('end')) reply = 'If you feel unsafe, call KIRAN 1800-599-0019 or your local emergency number immediately.';
  db.run('INSERT INTO chat_logs (user_text, reply_text) VALUES (?,?)',[message, reply],function(err){
    if(err) console.error('chat log db error', err);
    return res.json({ok:true, text:reply});
  });
});
// Simple admin JSON route
app.get('/admin/messages',(req,res)=>{
  db.all('SELECT id,name,email,message,created_at FROM contact_messages ORDER BY created_at DESC LIMIT 100',[],(err,rows)=>{
    if(err) return res.status(500).json({error:'DB error'});
    res.json({ok:true, items:rows});
  });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log('Server running on http://localhost:'+PORT));