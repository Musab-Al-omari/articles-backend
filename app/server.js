const userRouter = require("../app/api/user/routes");
const express = require("express");

const app = express();

app.use(userRouter);

app.get("/users", async (req, res) => {
  try {
    const result = await User.findAll();
    res.json(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = { app };
