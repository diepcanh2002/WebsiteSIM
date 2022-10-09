
const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000
const path=require('path')
const engine=require('express-handlebars')  
app.use(express.static(path.join(__dirname, 'public')))

// app.use(morgan('combined'))
const route=require('./routes')
const db=require('./config/db')
db.connect();

app.engine('handlebars', engine.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.set('views',path.join(__dirname,'resources/views'))

app.use(express.urlencoded({
  extended:true
}));
app.use(express.json())

// app.get('/',(req,res)=>{
//   res.render('home');
// })
route(app)

