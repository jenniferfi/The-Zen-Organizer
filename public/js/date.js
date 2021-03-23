function date(){
    // Create new date
    const lang = navigator.language;
    let d = new Date();

    // Format date
    let day = d.getDate();
    let weekd = d.toLocaleString(lang, { weekday: 'long' });
    let monthName = d.toLocaleString(lang, { month: 'long' });
    let year = d.getFullYear();

    // Attach to index.html
    $('#month').html(monthName);
    $('#weekday').html(weekd);
    $('#day').html(day);
    $('#year').html(year);
}

// Call function
$(document).ready(()=>{
    date();
})