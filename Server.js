const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

let messages = []; // In-memory message storage

app.get('/messages', (req, res) => {
  res.json(messages); // Return all messages
});

app.post('/messages', (req, res) => {
  const { message } = req.body;
  if (message) {
    messages.push(message); // Add message to storage
    res.status(201).json({ success: true });
  } else {
    res.status(400).json({ error: 'Message is required' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
