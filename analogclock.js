
function setTime(){
	var currentTime = new Date(),
		hour = currentTime.getHours(),
		minute = currentTime.getMinutes(),
		second = currentTime.getSeconds(),
		hourDeg = (hour * 360/12) + (minute*(360/60)/12), //allows the hour hand to tick in smaller increments
		minuteDeg = (minute * 360/60) + (second*(360/60)/60), //allows the minute hand to tick in smaller increments
		secondDeg = (360/60)*second;

    document.getElementById('hour').style.transform = 'rotate('+hourDeg+'deg)';
    document.getElementById('minute').style.transform = 'rotate('+minuteDeg+'deg)';
    document.getElementById('second').style.transform = 'rotate('+secondDeg+'deg)';
}

setInterval(function(){
	setTime();
}, 1000);