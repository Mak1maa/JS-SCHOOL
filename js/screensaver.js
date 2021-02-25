var tick = function(){
    //create date function
    var current = new Date(),
        time = getTime(current);

    setSizes(time);
    setColor(time);

    document.getElementById('month').innerHTML = buildMonth(current);
    document.getElementById('calendar').innerHTML = buildCalendar(current);
    document.getElementById('nameOfUser').innerHTML = (localStorage.getItem('name'));
},

setColor = function(time){
    var hours = time.hours > 12 ? time.hours - 12 : time.hours,
        display = hours + ':' + time.minutes + ':' + time.seconds;
        hslValue = parseInt(time.seconds / 60 * 360),
        hslSaturation = 40 + parseInt(time.minutes / 60 * 40),
        hsl = "hsl(" + hslValue + ', ' + hslSaturation + '%, ' + hslSaturation + '%)';

    document.getElementById('body').style.backgroundColor = hsl;
    document.getElementById('time').innerHTML = '<span class = "shadow">' + display +'</span><p>'+ hsl +'</p>';
},

setSizes = function(time){
    var min = 100 - (time.minutes / 60 * 100),
        min = min < 36 ? 36 : min,
        sec = min - (time.seconds / 60 * min) + '%';
        percent = min + '%'

    //document.getElementById('time').style.width = percent;
    //document.getElementById('bar').style.width = percent;

    if(time.minutes === 59){
        document.getElementById('bar').style.width = sec;
    }
},

buildMonth = function(current){
    var textMonth = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 
    'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

    return textMonth[current.getMonth()];
},

getTime = function(current){
    var currentHours = current.getHours(),
        currentMinutes = current.getMinutes(),
        currentSeconds = current.getSeconds();

    //add 0 before one size numbers
    if(currentHours < 10){
        currentHours = "0" + currentHours;
    }

    if(currentMinutes < 10){
        currentMinutes = "0" + currentMinutes;
    }

    if(currentSeconds < 10){
        currentSeconds = "0" + currentSeconds;
    }

    return{
        hours: currentHours,
        minutes: currentMinutes,
        seconds: currentSeconds
    };
},

buildCalendar = function(current){
    var year = current.getFullYear(),
        month = current.getMonth(),
        daysInFeb = new Date(year, 1, 1).getMonth() == new Date(year, 1, 29).getMonth() ? 29 : 28,
        daysInMonth = [31, daysInFeb, 31, 30, 31, 30, 31, 30, 31, 30, 31, 30],
        calendarFill = '';

    var date = new Date(year, month, 1).getDay();
    for(var i = 0; i<date; i++){
        calendarFill += '<li></li>';
    }

    for(var i = 1; i < daysInMonth[month] + 1; i++){
        var date = new Date(year, month, i).getDay();

        if(date === 0){
            calendarFill += '<li class = "weekend end">' + i + '</li>';

        }else if (date === 6){
            calendarFill += '<li class = "weekend">' + i + '</li>';

        }else if(i === current.getDate()){
            calendarFill += '<li class = "today">' + i + '</li>';

        }else{
            calendarFill += '<li>' + i + '</li>';
        }
    }
    return calendarFill;
};

function back(){
	window.location.href = 'index.html';
}

tick();
setInterval(tick, 1000);