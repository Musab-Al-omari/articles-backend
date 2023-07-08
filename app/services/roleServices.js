const { Role, UserRole } = require("../database");

const addRole = async (data) => {
  return await Role.create({
    role_name: data.roleName,
    role_description: data.roleDescription,
  });
};

const getAllRoles = async () => {
  return await Role.findAndCountAll({
    attributes: ["id", "role_name", "role_description"],
  });
};

const assignRole = async (data) => {
  const newRole = await UserRole.create({
    userId: data.userId,
    roleId: data.roleId,
  });
  return newRole.toJSON();
};

const editRole = async (data) => {
  return await UserRole.update(
    {
      userId: data.userId,
      roleId: data.roleId,
    },
    {
      where: {
        userId: data.userId,
      },
    }
  );
};

module.exports = { addRole, getAllRoles, assignRole, editRole };