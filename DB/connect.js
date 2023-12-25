const mongoose = require("mongoose");


const connectDB = (url) => {
  mongoose.connect(url, {
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
};

module.exports = connectDB;
