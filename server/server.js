const express = require("express");
const connectDB = require("./db");
const cookieParser = require("cookie-parser");
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const { adminAuth, userAuth } = require("./middleware/auth.js");
const router = express.Router();

app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", require("./Auth/route"));
app.use('/api', router);

app.get("/admin", adminAuth, (req, res) => res.send("Admin Route"));
app.get("/basic", userAuth, (req, res) => res.send("User Route"));
app.get("/logout", (req, res) => {
  res.cookie("jwt", "", { maxAge: "1" })
  res.redirect("/")
})

const PORT = 5000;

connectDB();

const server = app.listen(PORT, () =>
  console.log(`Server Connected to port ${PORT}`)
)
// Handling Error
process.on("unhandledRejection", err => {
  console.log(`An error occurred: ${err.message}`)
  server.close(() => process.exit(1))
})