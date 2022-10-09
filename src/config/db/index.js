
const mongoose=require("mongoose")

async function connect(){
   try {
    mongoose.connect('mongodb://localhost:27017/Web_BanSIM_dev',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
console.log('connect successfully!')
   } 
   catch (error) {
console.log('connect faisle')
   }
}

module.exports={connect}