const express = require("express");
const exp = express();

const createServer = port => {
  const listening = port;
  exp.get("/deepak", (req, res) => {
    res.status(200).json({ deepak: "success" });
  });

  exp.get("*", (req, res) => {
    res.status(200).json({ deepak: "others", portlis: listening });
  });

  const onListen = () => console.log("onListen", listening);

  exp.listen(port, onListen);
};

// createServer(4321);
// createServer(1234);
const app = {
  eh: "gnana"
};

exports.app = app;
exports.createServer = createServer;
