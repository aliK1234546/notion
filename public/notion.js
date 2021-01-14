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



function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}

  $(function () {
    $('#datetimepicker1').datetimepicker({
    	format: 'MM//DD/YYYY'
    });
 });

// function saveButton(){
// 	var tasklabel = $( "#tasklabel").val();
// 	var deadline = 	$( "#deadline").val();
//    $(".todo-column").append("<button id='task' type='button' class='btn w-100' draggable='true' ondragstart='drag(event)'><div class='container'><div class='row'><div class='col-1 p-0'><div style='border-radius:5px ; height: 75px; background-color: rgba(255, 118, 0); width: 5px;'></div></div><div class='col-11 m-auto'>"+tasklabel+"</div></div></div></button>");
// $("#closebutton").click();
// }

function remove_me(element,taskID){
  alert(taskID);
  console.log(await Task.findByIdAndDelete({_id : taskID}));
  $('#task_'+ taskID).remove();
} 

