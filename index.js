const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(__dirname + "/public"));

//db connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
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


app.get('/notion', (req, res) => {
    res.render('notion')
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