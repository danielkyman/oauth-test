"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "UserRoles",
      [
        { UserId: "c73d4cde-62be-4594-84ba-47dadbf1562b", RoleId: 1 }, // Assuming 1 is the ID for Admin
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("UserRoles", null, {});
  },
};
