const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { questionanswers } = require('./models');


app.get('/', async (req, res) => {
  console.log('category: ', req.query.category)
  console.log('subcategory: ', req.query.subcategory)
  let allQandA = []
  
  // get all questions and answers when queries are undefined
  if(req.query.category == undefined && req.query.subcategory == undefined) {
    console.log('1')
    allQandA = await questionanswers.findAll()
    res.send(allQandA)
  }

  // category is undefined but subcategory isnt so an error is sent back
  else if(req.query.category == undefined && req.query.subcategory != undefined) {
    console.log('2')
    res.statusCode = '400'
    res.send({status: 'error'})
  }

  // get all questions and answers where category query is 'All'
  else if(req.query.category === 'All') {
    console.log('3')
    allQandA = await questionanswers.findAll()
    res.send(allQandA)
  }

  // get all questions and answers when queries are empty strings
  else if(req.query.category === '' && req.query.subcategory === '') {
    console.log('4')
    allQandA = await questionanswers.findAll()
    res.send(allQandA)
  }

  // get questions and answers from a specific category with no subcategory
  else if(req.query.category !== '' && req.query.subcategory === '') {
    console.log('5')
    allQandA = await questionanswers.findAll({
      where: {
        category: req.query.category,
      }
    })
    res.send(allQandA)
  }

  // category is not undefined but subcategory is undefined
  else if(req.query.category != undefined && req.query.subcategory == undefined) {
    console.log('6')
    allQandA = await questionanswers.findAll({
      where: {
        category: req.query.category,
      }
    })
    res.send(allQandA)
  }
  
  // get questions and answers with a specified category and subcategory
  else if(req.query.category !== '' && req.query.subcategory !== '') {
    console.log('7')
    allQandA = await questionanswers.findAll({
      where: {
        category: req.query.category,
        subcategory: req.query.subcategory
      }
    })
    res.send(allQandA)
  }
  
})

port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);