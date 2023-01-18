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
  
  // get all questions and answers
  if(req.query.category === 'All') {
    allQandA = await questionanswers.findAll()
    console.log('1')
  }
  else if(req.query.category === '' && req.query.subcategory === '') {
    allQandA = await questionanswers.findAll()
    console.log('2')

  }
  // get questions and answers from a specific category with no subcategory
  else if(req.query.category !== '' && req.query.subcategory === '') {
    allQandA = await questionanswers.findAll({
      where: {
        category: req.query.category,
      }
    })
    console.log('3')

  }
  // get questions and answers with a specified category and subcategory
  else if(req.query.category !== '' && req.query.subcategory !== '') {
    allQandA = await questionanswers.findAll({
      where: {
        category: req.query.category,
        subcategory: req.query.subcategory
      }
    })
    console.log('4')

  }
  // console.log('allQandA: ', allQandA)
  res.send(allQandA)
})

port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);