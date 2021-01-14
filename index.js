const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const methodOverride = require('method-override')

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({extended : true}))
app.use(methodOverride('_method'))

//db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tasks', {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
  console.log("Connection Open!!");
})  
const taskSchema = new mongoose.Schema({
  name: String,
  date: String
})
const Task = mongoose.model('Task',taskSchema);


const firstTask = new Task({name:'DB',date:'12/01/2020'});
console.log(firstTask.name + "  " + firstTask.date)


app.get('/notion', async (req, res) => {
  const tasks = await Task.find({})
  res.render('notion',{tasks})
})
app.get('/notion/:id',async (req,res) =>{
  const task = await Task.findById(req.params.id)
  res.render('notion' , {task})
})

app.post('/notion',async (req,res) =>{
  console.log(req.body)
  const task = new Task(req.body.task);
  console.log(task)
  await task.save();
  res.redirect('notion')
})

app.delete('/notion/:id', async (req, res) => {
  console.log(req.params)
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect('/notion');
})
app.get('/', (req, res) => {
    res.render('dashboard')
})
app.get('/epicPass', (req, res) => {

  res.render('epicPass')
})



// app.get('/', (req, res) => {
//   res.send('Hello World!');
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})