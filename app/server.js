const express = require("express");
const { User } = require("./database");

const app = express();


app.get("/users", async (req, res) => {
  try {
    const result = await User.findAll();
    res.json(result);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get('/createData', async (req, res) => {
    try {
      const result = await Users.upsert()
      res.json(result.rows);
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

module.exports = { app };
