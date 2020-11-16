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

function saveButton(){
	var tasklabel = $( "#tasklabel").val();
	var deadline = 	$( "#deadline").val();
	$(".todo-column").append("<button id='taskTodo1' type='button' class='btn btn-success btn-block task'  draggable='true' ondragstart='drag(event)'><p>"+tasklabel+"</p><p>"+deadline+"</p></button>");
	$("#closebutton").click();



}