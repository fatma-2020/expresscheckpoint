const express = require("express");
const isOpened = require("./middleware/isOpened");

const app = express();

app.use(isOpened);
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile("./vue/home.html", { root: __dirname });
});
app.get("/contact", (req, res) => {
  res.sendFile("./vue/contact.html", { root: __dirname });
});
app.get("/products", (req, res) => {
  res.sendFile("./vue/products.html", { root: __dirname });
});

const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`server is running at port ${port}`);
});
