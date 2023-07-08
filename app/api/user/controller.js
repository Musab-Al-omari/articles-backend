"use strict";
const statue = require("http-status-codes");
const { getAllUsers } = require("../../services/userServices");

const getUsers = async (req, res) => {
  try {
    const user = await getAllUsers();
    res.status(statue.StatusCodes.OK).send(user);
  } catch (error) {
    res.status(statue.StatusCodes.BAD_REQUEST).send({ err: error.message });
  }
};
const createUser = async (req, res) => {
  try {
    const user = await createNewUser();
    res.status(statue.StatusCodes.OK).send(user);
  } catch (error) {
    res.status(statue.StatusCodes.BAD_REQUEST).send({ err: error.message });
  }
};

module.exports = {
    getUsers,
    createUser
};
