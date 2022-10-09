const newsRouter=require('./news')
const siteRouter=require('./site')
function routes(app){
    app.use('/news',newsRouter)
    app.use('/',siteRouter)

    // app.use('/news',newsRouter)
    // app.get('/',(req,res)=>{
    //     res.render('home');
    //   })
    // app.get('/news',(req,res)=>{
    //   res.render('news');
    // })
    // app.post('/search',(req,res)=>{
    //   console.log(req.body);
    //   res.send('search');
    // })
    
    app.listen(3000, () => {
      console.log(`Example app listening on port ${3000}`)
    })
    
}

module.exports=routes