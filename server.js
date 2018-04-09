const express = require ('express') //syntax for module (no . or /)
const app = express();
//our data
//note the syntax to put in file, you need relative path--must start w/ "./"
const fruits = require('./models/fruits.js')

//route (URL you can go to/address)
//INDEX route-- this will list all the routes
app.get('/fruits', (req, res) => {
  res.send(fruits);
})

//SHOW route --- show all the info about one partiuclar fruit
app.get('/fruits/:id', (req, res) => {
  const index = req.params.id
  res.send(fruits[index]);
});

app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});
