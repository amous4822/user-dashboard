const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const connctDB = require("./config/db");

const app = express();
app.use(express.json({ extended: false }));
connctDB();

const PORT = process.env.PORT || 5000;

app.use("/api/user", users);
app.use("/api/auth", auth);

app.get("/", (req, res) => {
  res.send("server started");
});

app.listen(PORT, () => {
  console.log("server started ", PORT);
});
