const express = require('express');
const router = express.Router();

//we need to specify what data to require
//model should always be uppercase
const Veggies = require('../models/veggies')

//route (URL you can go to/address)
//INDEX route-- this will list all the routes
router.get('/', (req, res) => {
  res.render('vegetables/index.ejs', {
    veggies: Veggies //<--the data
  })
});

//NEW route ---
router.get('/new', (req, res) => {
  res.render('vegetables/new.ejs', {
    vegetable: Veggies[req.params.id]
  })
});

//PUT route// to put edit page up
router.get('/:index/edit', (req, res) => {
  res.render('vegetables/edit.ejs', {
    vegetable: Veggies[req.params.index],
    index: req.params.index
  })
})

//SHOW route --- show all the info about one partiuclar fruit
router.get('/:id', (req, res) => {

  //you "render" templates where you previusly just "send"ed data
  //you can pass in the data you want to display in your template as the second parameter
  //your data will ***ALWAYS** be an object
  res.render('vegetables/show.ejs', {
      vegetable: Veggies[req.params.id]
  })
});


//POST route
router.post('/', (req, res) => {
  console.log(req.body);
//add a new object to our fruits array
//if req.body.readyToEat is on
  const newVegetable = {
      name: req.body.name,
      color: req.body.color,
      readyToEat: req.body.readyToEat == 'on' ? true : false
  }

  Veggies.push(newVegetable);
  res.redirect('/veggies')

});

//DELETE route
//delete using the index of data in model
router.delete('/:id', (req, res) => {
  Veggies.splice(req.params.id, 1);
  res.redirect('/veggies')
})

//PUT route
router.put('/:id', (req, res) => {
  console.log(req.body);
  const theVegetable = {
    name: req.body.name,
    color: req.body.color,
    readyToEat: req.body.readyToEat == 'on' ? true : false
  }
  Veggies[req.params.id] = theVegetable;

  res.send("got it");
  res.redirect('/veggies');
})

module.exports = router;
