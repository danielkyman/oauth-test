// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const userController = require("../controllers/userController");

// User Registration
router.post(
  "/register",
  [
    body("username").isString().trim().not().isEmpty(),
    body("password").isLength({ min: 6 }),
  ],
  userController.register
);

// User Login
router.post(
  "/login",
  [
    body("username").isString().trim().not().isEmpty(),
    body("password").isString().not().isEmpty(),
  ],
  userController.login
);

module.exports = router;
