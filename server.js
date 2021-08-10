const express = require("express");
const users = require("./routes/users");
const auth = require("./routes/auth");
const alert = require("./routes/alerts");
const connctDB = require("./config/db");
const path = require("path");
const app = express();
app.use(express.json({ extended: false }));
connctDB();

app.use("/api/user", users);
app.use("/api/auth", auth);
app.use("/api/alert", alert);

// serve static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
  );
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("server started ", PORT);
});
