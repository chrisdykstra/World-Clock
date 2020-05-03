function setTime(){
	hourDeg = (h * 360/12) + (m*(360/60)/12), //allows the hour hand to tick in smaller increments
	minuteDeg = (m * 360/60) + (s*(360/60)/60), //allows the minute hand to tick in smaller increments
	secondDeg = (360/60)*(s+1);

document.getElementById('hour').style.transform = 'rotate('+hourDeg+'deg)';
document.getElementById('minute').style.transform = 'rotate('+minuteDeg+'deg)';
document.getElementById('second').style.transform = 'rotate('+secondDeg+'deg)';
}

setInterval(function(){
setTime();
}, 1000);