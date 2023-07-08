const bcrypt = require("bcrypt");
const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      firstName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
          // Hash the password using bcrypt before storing it
          const hashedPassword = bcrypt.hashSync(value, 10);
          this.setDataValue("password", hashedPassword);
        },
      },
      status: {
        type: DataTypes.ENUM("Active", "Inactive"),
        defaultValue: "Active",
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true,
      },
    },
    {
      timestamps: true, // Enables timestamps
      tableName: "user",
      createdAt: "created_at", // Customize the created at field name
      updatedAt: "updated_at", // Customize the updated at field name
    }
  );

  User.associate = (models) => {
    User.hasOne(models.UserRole, {
      foreignKey: "user_id",
      targetKey: "id",
      onDelete: "RESTRICT",
    });
  };

  return User;
};

module.exports = user;
