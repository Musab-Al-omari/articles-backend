const { User, UserRole, Role } = require("../database");

const getAllUsers = async () => {
  return await User.findAll();
};
const createNewUser = async () => {
  return await User.create({
    firstName: "musab",
    lastName: "omari",
    email: "musab@yahoo.com",
    password: "12345",
    phone: "0781220402",
  });
};

module.exports = {
  getAllUsers,
  createNewUser,
};
