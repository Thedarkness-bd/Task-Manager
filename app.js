const express = require("express");
const app = express();
const tasks = require("./routes/Tasks");
app.use(express.json());
require('dotenv').config()
// database
const connectDB = require("./DB/connect");

//routes
app.get("/hello", (req, res) => {
  res.send("Task manager app");
});

app.use("/api/v1/tasks", tasks);

const PORT = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, console.log(`Listening on port ${PORT} and DB CONNECTED...`));
  } catch (error) {
    console.log(error);
  }
};

start();
