const express = require('express')
const app = express()
const port = 5000;
const cors = require("cors");

app.use(cors());

const categories = require('./data/category')
const course = require('./data/course.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/course', (req, res) =>{
  res.send(course)
})

app.get('/course-categories', (req, res) =>{
  res.send(categories);
})

app.get("/category/:id", (req, res) => {
  const id = req.params.id;
 
    const category_course = course.filter((c) => c.category_id === id);
    res.send(category_course);
    console.log(category_course)
  
});

app.get("/coursedetails/:id", (req, res) =>{
  const id = req.params.id;

  const selectedCourse = course.find(c => c._id === id);
  res.send(selectedCourse);

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})