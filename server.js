const express = require ('express') //syntax for module (no . or /)
const app = express();
//our data
//note the syntax to put in file, you need relative path--must start w/ "./"
const fruits = require('./models/fruits.js')

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
  res.send("you hit the post route!")
});



app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});
