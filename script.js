const dayEL = document.getElementById('days');
const hoursEL = document.getElementById('hours');
const minEL = document.getElementById('mins');
const secEL = document.getElementById('sec');

const newYears = "5 feb 2022";

function countdown(){
    const newYearDate = new Date(newYears);
    const currentDate = new Date();
    
    const totalSecond = (newYearDate - currentDate ) / 1000;
    
    const days = Math.floor(totalSecond / 3600 / 24);
    
    const hours = Math.floor(totalSecond / 3600) % 24;
    const min = Math.floor(totalSecond / 60 ) % 60;
    const second = Math.floor(totalSecond) % 60;
    
    dayEL.innerHTML = days;
    hoursEL.innerHTML = formatTime(hours);
    minEL.innerHTML = formatTime(min);
    secEL.innerHTML = formatTime(second);
    
    
    console.log(days, hours, min, second );
}

function formatTime(time){
    return time > 9 ? time : `0${time}` 
}
countdown();
setInterval(countdown, 1000);