const mongoose = require("mongoose");
console.log(process.env.DB_USER_NAME);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@cluster0.wlfl9jj.mongodb.net/railway-app?retryWrites=true&w=majority`
  )
  .then((res) => {
    console.log("Database is Connected..");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
