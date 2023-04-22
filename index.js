const express = require('express');
const path = require('path');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept",
    "Content-Security-Policy",
    "img-src 'self'"
  );
  res.sendFile(path.join(__dirname, '/marwan.json'));
});

app.get('/marwan.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, '/marwan.jpg'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});