// Render widgets on index page
$(document).ready(() =>{
    $('#calendar').load('widgets/date.html');
    $('#weather').load('widgets/weather.html');
    $('#box3').load('widgets/todo.html');
    $('#box4').load('widgets/pomodoro.html');
});