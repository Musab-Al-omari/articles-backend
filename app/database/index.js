const { Sequelize, DataTypes } = require("sequelize");

// Database connection details
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
  }
);

const UserModel = require("./models/user")(sequelize, DataTypes);
const RoleModel = require("./models/role")(sequelize, DataTypes);
const UserRoleModel = require("./models/user-role")(sequelize, DataTypes);


const models = {
  User: UserModel,
  Role: RoleModel,
  UserRole: UserRoleModel,
  sequelize,
};

Object.values(models).forEach((model) => {
  if (model.associate) {
    model.associate(models);
  }
});

// sequelize.sync({ logging: false});
sequelize.sync({ logging: false, force: true });

module.exports = models;
