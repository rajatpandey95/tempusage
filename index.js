const express = require("express");
const dotenv = require("dotenv");
const { router } = require("./routes/tasks");
const { connectDB } = require("./db/connect");
const { notFound } = require("./middleware/404Error");

const app = express();

dotenv.config({ path: "./.env" });
connectDB();

// to use json data to communicate
app.use(express.json());
app.use(express.static("public"));
// app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/index.html");
// });

// as we can not implement all HTTP methods for all type of api on server page
// so we make a routes folder
app.use("/api/v1/tasks", router);

app.use(notFound);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server Started at PORT : ${port}`);
});
