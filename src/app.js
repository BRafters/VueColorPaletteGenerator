const express = require("express");
const app = express();
const generator = require("./color-generator.js");
const port = 3000;

// HTTP GET
// A list of colors, takes parameter for number of colors we want to generate
app.get("/colors/:num", (req, res) => {
    res.json(generator.generateNewColors(req.params.num));
});

// Singular color
app.get("/color", (req, res) => {
    res.json(generator.generateSingleColor());
});

// Serving
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});