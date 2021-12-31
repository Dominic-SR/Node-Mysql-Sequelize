'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('users',
    {
      user_id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey:true,
        type: Sequelize.INTEGER,
      },
      user_name:{
        type: Sequelize.STRING,
      },
      user_email:{
        type:Sequelize.STRING,
      },
      user_password:
      {
        type:Sequelize.STRING,
      },
      about:{
        type:Sequelize.STRING,
      }
    }
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
