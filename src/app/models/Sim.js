const mongoose=require("mongoose")
const Schema = mongoose.Schema;

const Sim = new Schema({
  phoneNumber:String,
  images:String,
  mobileNetwork:String,
  price: String,
  type:String,
})
module.exports=mongoose.model('Sim',Sim)