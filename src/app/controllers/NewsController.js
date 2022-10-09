class NewController{
    //[GET] /new
    index(req,res){
        res.render('news');
    }
    show(req,res){
        res.send('New detail')
    }
}

module.exports=new NewController
