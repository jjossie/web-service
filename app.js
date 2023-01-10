
const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

const html = `Hello World!`;

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

