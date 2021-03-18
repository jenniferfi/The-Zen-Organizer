// Render widgets on index page
$(document).ready(() =>{
    $('#calendar').load('widgets/date.html');
    $('#weather').load('widgets/weather.html');
    $('#pomodoro').load('widgets/pomodoro.html');
    $('#box3').load('widgets/todo.html');
});