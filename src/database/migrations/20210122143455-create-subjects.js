'use strict';

const sequelize = require('sequelize');



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Subject',{
      id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      Name:{
        type:sequelize.STRING,
        allowNull:false
      },
      Description:{
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
     await queryInterface.dropTable('Subject');
  }
};
