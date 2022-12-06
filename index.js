const express = require("express");
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { questionanswers } = require('./models');


app.get('/', async (req, res) => {
  const allQandA = await questionanswers.findAll()

  res.send(allQandA)
})





port = 3005;
app.listen(
  process.env.PORT || port,
  console.log(`Server is running on port ${port}`)
);