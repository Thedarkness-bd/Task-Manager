const express = require("express");
const app = express();

app.get("/hello", (req,res) => {
  res.send("Task manager app");
});





const PORT = 3000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
