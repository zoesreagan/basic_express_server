const express = require ('express') //syntax for module (no . or /)
const app = express();
const bodyParser = require('body-parser')
const methodOverride = require('method-override')

//our data
//note the syntax to put in file, you need relative path--must start w/ "./"
const fruitController = require('./controllers/FruitController');

//MIDDLEWARE
//must go above routes you are intercepting
//you app.use MIDDLEWARE
//next will continue process
// app.use((req, res, next) => {
//   console.log("I am middleware and will be run for all routes");
//   next();
// })


//we are using the body-parser MIDDLEWARE
//it is a module that will let us see the form data in our post requests
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'))

//this will let us include static assets (CSS, images)
app.use(express.static('public'))

//when a request comes that starts with /fruits, including anything after
//use the fruitController
app.use('/fruits', fruitController);


app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});
