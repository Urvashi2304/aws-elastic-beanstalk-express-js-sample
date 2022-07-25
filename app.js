const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello, this is a beautiful World, i am so pretty, i love myself, i am so cute, hahahahahahahahahah, bla bla bla, this is a web app, oh yes :)!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
