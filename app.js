const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, this is a beautiful World!'));
app.get('/', (req, res) => res.send('Hello, I am so beautiful... i am sooooo happyyyyyy!'));
app.listen(port);
console.log(`App running on http://localhost:${port}`);
