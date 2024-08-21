const express = require(`express`);

const app = express();

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

app.get("/", (req, res) => {
  res.send(`Welcome to my basic Express server!`);
});

app.get("/about", (req, res) => {
  res.send(`This server was created by PORAT`);
});

const MyData = {
  email: "Porat850@gmail.com",
  phone: "058-676-6778",
};

app.get("/contact", (req, res) => {
  res.json(MyData);
});

const MyProduct = [
  { id: "1", name: "bottle", colors: ["red", "yellow"], price: 233 },
  { id: "2", name: "computer", colors: ["brown", "black"], price: 2800 },
  { id: "3", name: "oven", colors: ["pink", "gold"], price: 1700 },
];

app.get(`/api/products`, (req, res) => {
  res.json(MyProduct);
});

app.get(`/api/products/:id`, (req, res) => {
  const ProductID = req.params.id;
  let product = null;
  for (let i = 0; i < MyProduct.length; i++) {
    if (MyProduct[i].id === ProductID) {
      product = MyProduct[i];
      res.json(product);
    }
  }
  if (product === null) {
    product = "your product not found";
    res.send(product);
  }
});
