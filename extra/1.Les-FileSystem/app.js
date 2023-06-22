const http = require("http");
const fs = require("fs");
http
 .createServer(function (req, res) {
  fs.readFile("1.les.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });

  fs.appendFile("proglang.txt", " Javascript", function (err) {
   if (err) throw err;
   console.log("Kaydedildi");
  });

  fs.open("yenibelgem.txt", "w", function (err){

  })
 })
 .listen(8080);
