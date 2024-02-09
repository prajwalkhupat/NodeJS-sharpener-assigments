const express=require('express');

const bodyParser=require('body-parser')

const sequelize=require('./util/database');

const bookroute=require('./routes/book')

const slotroute=require('./routes/slotTable');






const path=require('path')
const rootDir=require('./util/path');
const cors=require('cors')
const app=express();
app.use(cors());
app.use(bodyParser.json({extended:false}));


app.use(slotroute);
app.use(bookroute);


sequelize.sync()
.then(result=>{
    app.listen(3000);
});

