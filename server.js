const express = require ('express')
const app = express();

const fruits = ['apple', 'banana', 'pear']

//route (URL you can go to/address)
//INDEX route-- this will list all the routes
app.get('/fruits', (req, res) => {
  res.send(fruits);
})

app.listen(3000, () => {
  console.log("server is listening on Port 3000");
});
