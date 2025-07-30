import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

// === checkUsername ===
app.post('/checkUsername', (req, res) => {
  const { username } = req.body;
  if (!username) {
    return res.status(400).json({ error: 'Username tidak ditemukan' });
  }
  const isAvailable = username.toLowerCase() !== 'admin';
  res.json({ available: isAvailable });
});

// === deleteChatHistory ===
app.post('/deleteChatHistory', (req, res) => {
  const { userId, partnerId } = req.body;
  console.log(`Menghapus chat antara ${userId} dan ${partnerId}`);
  res.json({ success: true });
});

// === logNewUser ===
app.post('/logNewUser', (req, res) => {
  const { userId, email } = req.body;
  console.log(`User baru: ${userId}, ${email}`);
  res.json({ success: true });
});

// === sendChatNotification ===
app.post('/sendChatNotification', (req, res) => {
  const { to, message } = req.body;
  console.log(`Kirim notifikasi ke ${to}: ${message}`);
  res.json({ success: true });
});

// === updateReadStatus ===
app.post('/updateReadStatus', (req, res) => {
  const { userId, partnerId } = req.body;
  console.log(`Update read status untuk ${userId} <-> ${partnerId}`);
  res.json({ success: true });
});

// Default route
app.get('/', (req, res) => {
  res.send('API Qih Chat aktif!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});
