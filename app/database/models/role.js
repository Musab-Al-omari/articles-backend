const role = (sequelize, DataTypes) => {
    const Role = sequelize.define(
      "Role",
      {
        id: {
          type: DataTypes.UUID,
          defaultValue: DataTypes.UUIDV4,
          primaryKey: true,
        },
        role_name: {
          type: DataTypes.STRING,
          allowNull: false,
          unique: true,
        },
        role_description: {
          type: DataTypes.STRING,
        },
      },
      {
        tableName: "role",
        createdAt: "created_date",
        updatedAt: "updated_date",
      }
    );
    Role.associate = (models) => {
      Role.hasOne(models.UserRole, {
        foreignKey: "role_id",
        targetKey: "id",
      });
    };
  
    return Role;
  };
  
  module.exports = role;