'use strict';

const sequelize = require('sequelize');



module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('StudentSubjects',{
      id:{
        type:sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
      },
      studentId:{
        type:sequelize.INTEGER,
        allowNull:false,
        references:{model:"Student",key:"id"},
        onUpdate:'cascade',
          onDelete:'cascade'
      }, 
      subjectId:{
        type:sequelize.INTEGER,
        allowNull:false,
        references:{model:"Subject",key:"id"},
        onUpdate:'cascade',
          onDelete:'cascade'
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
     await queryInterface.dropTable('StudentSubjects');
  }
};
