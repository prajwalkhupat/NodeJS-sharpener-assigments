const { where } = require('sequelize');
const slottable=require('../models/slottable');
exports.AddSlot=(req,res,next)=>{
          
    const name= req.body.name;
    const email= req.body.email;
    let slot= req.body.slot;
    const time=req.body.time;

    // if(slot>=1){
    //   slot=slot-1;
    // }
    console.log(name,email,slot,time)
   
    slottable.create({
      name:name,
      email:email,
      slot:slot,
      time:time
    })
    .then(product=>{
      
    // if(product.slot>=1){
    //    product.slot=product.slot-1;
    // }
      res.json(product)
    })
    //console.log('this is product  is added')
    
    .catch(err=>console.log(err));


}
exports.getslotdata=(req,res,next)=>{
   
   slottable.findAll()
   .then(slotdata=>{
        res.json(slotdata);
   })
   .catch(err=>console.log(err))

}

exports.deleteSlot=(req,res,next)=>{
  let id=req.params.slotId;
  console.log(id);
  slottable.findAll({where:{email:id}})
  .then(product=>{
    if(product[0]){
     console.log(product[0],'hello')
      product[0].destroy()
     
    }
    
  })
}