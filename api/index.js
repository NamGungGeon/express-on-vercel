const app = require("express")();

app.get("/api", (req, res) => {
  res.end("hi express");
});

module.exports = app;
