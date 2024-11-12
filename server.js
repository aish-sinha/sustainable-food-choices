const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// Serve static files from 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Handle root route and serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Basic API to handle data storage (Optional)
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data fetched successfully!' });
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
