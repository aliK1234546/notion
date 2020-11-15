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

function addTask(){

	$(".todo-column").append("<button id='taskTodo1' type='button' class='btn btn-success btn-block task'  draggable='true' ondragstart='drag(event)'>Info</button>");

}
function () {
             $('#datetimepicker1').datetimepicker();
         }

$( "#submit").click(function() {
  var deadline = $("#deadline").val();
  alert(deadline);
});