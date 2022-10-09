const Sim = require('../models/Sim')
const {mutipleMongooseToObject}=require('../../until/mongoose')
// const Sim=require('../models/Sim')
class SiteController{
    //[GET] /
    index(req,res){
        // res.render('home')
        Sim.find({})
        .then(sims=>{
            res.render('home',{
                sims:mutipleMongooseToObject(sims)})})
        .catch(error=>next(error))
        }
    
    search(req,res){
        res.send('search')
    } 
}

module.exports=new SiteController