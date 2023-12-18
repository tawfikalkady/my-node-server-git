const express = require("express");
var cors = require('cors')
const app = express();
const products=require('./products.json')
const port = 3000;

app.use(cors())

app.get("/", (req, res) => {
  res.send("hi,there !");
});

app.get('/products', (req, res) => {
  res.send(products)
})

app.get('/products/:id', (req,res) => {
  const id=parseInt(req.params.id)
  const product=products.find(product => product.id ===id) || {}
  res.send(product)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
