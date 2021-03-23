function date(){
    const lang = navigator.language;
    let d = new Date();

    let day = d.getDate();
    let weekd = d.toLocaleString(lang, { weekday: 'long' });
    let monthName = d.toLocaleString(lang, { month: 'long' });
    let year = d.getFullYear();

    $('#month').html(monthName);
    $('#weekday').html(weekd);
    $('#day').html(day);
    $('#year').html(year);
}

$(document).ready(()=>{
    date();
})