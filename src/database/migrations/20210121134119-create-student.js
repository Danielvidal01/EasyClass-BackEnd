'use strict';

const sequelize = require('sequelize');



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Student',{
      id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      FirstName:{
        type:sequelize.STRING,
        allowNull:false,
      },
      LastName:{
        type:sequelize.STRING,
        allowNull:false,
      },
      Email:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      Password:{
        type:sequelize.STRING,
        allowNull:false,
      },
      Phone:{
        type:sequelize.STRING,
        allowNull:false,
        unique:true,
      },
      BrithDate:{
        type:sequelize.STRING,
        allowNull:false
      },
      createdAt:{
        type:Sequelize.DATE,
        allowNull:false,
      },
      updatedAt:{
        type:Sequelize.DATE,
        allowNull:false,
      }

    })
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('Student');
  }
};
