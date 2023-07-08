const userRole = (sequelize, DataTypes) => {
    const UserRole = sequelize.define(
      "UserRole",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
          field: "user_id",
        },
        roleId: { type: DataTypes.INTEGER, field: "role_id" },
      },
      {
        tableName: "user_role",
        createdAt: "created_date",
        updatedAt: "updated_date",
      }
    );
    UserRole.associate = (models) => {
      UserRole.belongsTo(models.User, {
        foreignKey: "user_id",
        targetKey: "id",
      });
      UserRole.belongsTo(models.Role, {
        foreignKey: "role_id",
        targetKey: "id",
      });
    };
  
    return UserRole;
  };
  
  module.exports = userRole;