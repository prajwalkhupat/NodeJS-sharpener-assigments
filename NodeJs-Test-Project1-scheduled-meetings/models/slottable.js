const Sequelize=require('sequelize');

const sequelize=require('../util/database');

const slottable=sequelize.define('slottable',{
  id:{
    type:Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement:true,
    allownull:false,
    
  },
  name:Sequelize.STRING,
  email:{
    type:Sequelize.STRING,
    allownull:false
  },
  slot:{
    type:Sequelize.INTEGER,
    allownull:false
  },
  time:Sequelize.STRING
});

module.exports=slottable;