const express = require("express");
const app = express();
const tasks = require("./routes/Tasks");
app.use(express.json());

//routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;
app.listen(PORT, console.log(`Listening on port ${PORT}`));
