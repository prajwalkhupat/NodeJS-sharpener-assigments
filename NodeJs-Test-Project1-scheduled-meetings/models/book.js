const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const Book=sequelize.define('book',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allownull:false,
    
  },
  bookname:Sequelize.STRING,
  returndate:{
    type:Sequelize.STRING,
    allownull:false
  },
  bookedtime:{
    type:Sequelize.STRING,
    allownull:false
  },
  fine:Sequelize.INTEGER
  
});

module.exports=Book;

