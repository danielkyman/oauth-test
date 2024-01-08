// middlewares/role.js

const { User, Role } = require("../models");

const permit = (...permittedRoles) => {
  return async (req, res, next) => {
    const userId = req.user.id;
    const userRoles = await User.findByPk(userId, { include: Role });

    if (
      userRoles &&
      userRoles.Roles.some((role) => permittedRoles.includes(role.name))
    ) {
      next();
    } else {
      res.status(403).json({
        message: "Forbidden - You don't have permission to access this",
      });
    }
  };
};

module.exports = { permit };
