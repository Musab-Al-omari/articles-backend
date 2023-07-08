require("dotenv").config();
const { sequelize } = require("./app/database");
const { app } = require("./app/server");
const PORT = process.env.PORT || 3000;
sequelize
  .authenticate()
  .then(() => {
    console.log("DB runing");
    app.listen(PORT, () => {
      console.log(`running on ${PORT}`);
    });
  })
  .catch((e) => {
    console.log(e);
  });
