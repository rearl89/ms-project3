const express = require("express");
const mongoose = require("mongoose");
const entryRoutes = require("./routes/entries");
const userRoutes = require("./routes/user");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 10000;

// middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/entries", entryRoutes);
app.use("/user", userRoutes);

// connects to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.get("/", (req, res) => {
  res.send("API is running...");
});
