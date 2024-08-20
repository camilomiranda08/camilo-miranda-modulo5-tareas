const http = require("http");
const fs = require("fs");

const PORT = 3003;

const server = http.createServer((req, res) => {
  if (req.url === "/products" && req.method === "GET") {
    fs.readFile("products.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Error reading products file" }));
        return;
      }

      const products = JSON.parse(data);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    });
  } else if (req.url.match(/\/products\/\d+/) && req.method === "GET") {
    const id = parseInt(req.url.split("/")[2]);

    fs.readFile("products.json", "utf8", (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Error reading products file" }));
        return;
      }

      const products = JSON.parse(data);
      const product = products.find((p) => p.id === id);

      if (product) {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.end(JSON.stringify(product));
      } else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ message: "Product not found" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Route not found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
