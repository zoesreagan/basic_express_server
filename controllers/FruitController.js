const express = require('express');
const router = express.Router();

//we need to specify what data to require
//model should always be uppercase
const Fruits = require('../models/fruits')

//route (URL you can go to/address)
//INDEX route-- this will list all the routes
router.get('/', (req, res) => {
  res.render('index.ejs', {
    fruits: Fruits //<--the data
  })
});

//NEW route ---
//get/fruits/NEW route
//new template (EJS) --
router.get('/new', (req, res) => {
  res.render('new.ejs', {
    fruit: Fruits[req.params.id]
  })
});

//PUT route// to put edit page up
router.get('/:index/edit', (req, res) => {
  res.render('edit.ejs', {
    fruit: Fruits[req.params.index],
    index: req.params.index
  })
})

//SHOW route --- show all the info about one partiuclar fruit
router.get('/:id', (req, res) => {
  // const index = req.params.id
  // res.send(fruits[index]);

  //you "render" templates where you previusly just "send"ed data
  //you can pass in the data you want to display in your template as the second parameter
  //your data will ***ALWAYS** be an object
  res.render('show.ejs', {
    fruit: Fruits[req.params.id]
  })
});


//POST route
//post/fruits
//no id needed, because this is a new fruit
router.post('/', (req, res) => {
  console.log(req.body);
//add a new object to our fruits array
//if req.body.readyToEat is on
  const newFruit = {
      name: req.body.name,
      color: req.body.color,
      readyToEat: req.body.readyToEat == 'on' ? true : false
  }

  Fruits.push(newFruit);
  res.redirect('/fruits')

});

//DELETE route
//delete using the index of data in model
router.delete('/:id', (req, res) => {
  Fruits.splice(req.params.id, 1);
  res.redirect('/fruits')
})

//PUT route
router.put('/:id', (req, res) => {
  console.log(req.body);
  const theFruit = {
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat == 'on' ? true : false
  }
  Fruits[req.params.id] = theFruit;

  res.send("got it");
  res.redirect('/fruits');
})

module.exports = router;
