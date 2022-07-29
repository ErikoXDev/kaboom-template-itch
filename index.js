const express = require("express");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, ".", "index.html"));
});

app.use(express.static(path.join(__dirname, "./dist")));
app.use(express.static(path.join(__dirname, "./sounds")))
app.use(express.static(path.join(__dirname, "./sprites")))

app.listen(8000, () => {
    console.log("Started server! http://localhost:8000");
});