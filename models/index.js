// models/index.js

const User = require("./User");
const Role = require("./Role");
const UserRole = require("./UserRole");

User.belongsToMany(Role, { through: UserRole });
Role.belongsToMany(User, { through: UserRole });

module.exports = { User, Role, UserRole };
