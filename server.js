const express = require ('express') //syntax for module (no . or /)
const app = express();
const bodyParser = require('body-parser')

//our data
//note the syntax to put in file, you need relative path--must start w/ "./"
const fruits = require('./models/fruits.js')

//MIDDLEWARE
//must go above routes you are intercepting
//you app.use MIDDLEWARE
//next will continue process
app.use((req, res, next) => {
  console.log("I am middleware and will be run for all routes");
  next();
})
//we are using the body-parser MIDDLEWARE
//it is a module that will let us see the form data in our post requests
app.use(bodyParser.urlencoded({extended: false}))

//route (URL you can go to/address)
//INDEX route-- this will list all the routes
app.get('/fruits', (req, res) => {
  res.render('index.ejs', {
    fruits: fruits //<--the data
  })
});

//NEW route ---
//get/fruits/NEW route
//new template (EJS) --
app.get('/fruits/new', (req, res) => {
  res.render('new.ejs', {
    fruit: fruits[req.params.id]
  })
});


//SHOW route --- show all the info about one partiuclar fruit
app.get('/fruits/:id', (req, res) => {
  // const index = req.params.id
  // res.send(fruits[index]);

  //you "render" templates where you previusly just "send"ed data
  //you can pass in the data you want to display in your template as the second parameter
  //your data will ***ALWAYS** be an object
  res.render('show.ejs', {
    fruit: fruits[req.params.id]
  })
});


//POST route
//post/fruits
//no id needed, because this is a new fruit
app.post('/fruits', (req, res) => {
  console.log(req.body);
//add a new object to our fruits array
//if req.body.readyToEat is on
  const newFruit = {
      name: req.body.name,
      color: req.body.color,
      readyToEat: req.body.readyToEat == 'on' ? true : false
  }
  // if(req.body.readyToEat == "on") {
  //     newFruit.readyToEat = true;
  // } else newFruit.readyToEat = false;

  fruits.push(newFruit);
  res.redirect('/fruits')

});



app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});
