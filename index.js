const fs = require("fs");
const http = require("http");

const tempOverview = fs.readFileSync(
  "./templates/template-overview.html",
  "utf-8"
);
const tempProductList = fs.readFileSync(
  "./templates/template-product-list.html",
  "utf-8"
);
const tempProductDetails = fs.readFileSync(
  "./templates/template-product-details.html",
  "utf-8"
);

////////////////
// SERVER
const server = http.createServer((req, res) => {
  res.end(tempOverview);
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening on port 5000.");
});

////////////////
// ROUTING
