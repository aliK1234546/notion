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

//portListen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})