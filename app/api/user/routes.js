"use strict";
const express = require("express");
const controller = require("./controller");
const router = new express.Router();

router.get("/user", controller.getUsers);
router.get("/createUser", controller.createUser);


module.exports = router;