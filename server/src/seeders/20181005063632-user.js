
const bcrypt = require('bcrypt');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      firstName: 'Rob',
      lastName: 'Miller',
      displayName: 'Miller',
      email: 'new@gmail.com',
      role: "Customer",
      password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8)),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      firstName: 'Peter',
      lastName: 'Parker',
      displayName: 'Parker',
      email: 'kek@gmail.com',
      role: "Creative",
      password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8)),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },{
      firstName: 'Howard',
      lastName: 'Balward',
      displayName: 'Balward',
      email: 'wow@gmail.com',
      role: "Creative",
      password: bcrypt.hashSync('123456', bcrypt.genSaltSync(8)),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
  },
};
