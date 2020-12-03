const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello AWS World!'));

app.listen(port);
console.log(`AAA App running on http://localhost:${port}`);
