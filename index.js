const fs = require("fs");
const http = require("http");

const data = fs.readFileSync("./dev-data/data.json", "utf-8");
const dataObj = JSON.parse(data);
const tempHome = fs.readFileSync("./index.html", "utf-8");
const tempProductList = fs.readFileSync("./product-list.html", "utf-8");
const tempProductDetails = fs.readFileSync("./product-details.html", "utf-8");

////////////////
// SERVER
const server = http.createServer((req, res) => {
  let pathName = req.url;

  if (pathName === "/" || pathName === "/home") {
    res.end(tempHome);
  } else if (pathName === "/product-list") {
    res.end(tempProductList);
  } else if (pathName === "/product-details") {
    res.end(tempProductDetails);
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found.</h1>");
  }
});

server.listen(5000, "127.0.0.1", () => {
  console.log("Listening on port 5000.");
});
