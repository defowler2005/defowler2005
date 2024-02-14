const express = require('express');
const fs = require('node:fs');
const path = require('node:path');
const mime = require('mime-types');
const app = express();

const PORT = 80;
app.listen(PORT, () => console.log('The server is now running on port', PORT));

app.get('*', (req, res, next) => {
    const filePath = path.join(__dirname, (!req.originalUrl.slice(1).length ? 'index.html' : req.originalUrl));
    if (fs.existsSync(filePath)) {
        res.set('Content-Type', mime.lookup(filePath) ?? 'text/plain');
        res.send(fs.readFileSync(filePath));
    } else next();
});

app.get('*', (_, res) => {
    res.set('Content-Type', 'text/html'); res.set(200).send(fs.readFileSync('./404.html'))
});