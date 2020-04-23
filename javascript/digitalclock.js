// let setTimer = null;
// function showTime(){
//     var date = new Date();
//     var h = date.getHours(); // 0 - 23
//     var m = date.getMinutes(); // 0 - 59
//     var s = date.getSeconds(); // 0 - 59
//     var session = "AM";

//     if(h == 0){
//         h = 12;
//     }

//     if(h > 12){
//         h = h - 12;
//         session = "PM";
//     }

//     h = (h < 10) ? "0" + h : h;
//     m = (m < 10) ? "0" + m : m;
//     s = (s < 10) ? "0" + s : s;

//     var time = h + ":" + m + ":" + s + " " + session;
//     document.getElementById("digitalClock").innerText = time;
//     document.getElementById("digitalClock").textContent = time;

//     if (setTimer != null){
//         clearTimeout(setTimer);
//     }

//     setTimeout(showTime, 1000);

// }

// showTime();
function startTime() {

    incrementTime();
    let pseudoHour = h > 12 ? h - 12 : h; //doesn't change back end 24 hour clock but displays as 12 hour on front end
    let time = pseudoHour + ":" + checkTime(m) + ":" + checkTime(s) + " " + meridian;
    document.getElementById('digitalClock').textContent = time;
}

function incrementTime() {

    if (s < 60) {
        s = s + 1;
    }

    if (s == 60) {
        s = 0;
        m = m + 1;
    }

    if (m == 60) {
        m = 0;
        h = h + 1;
    }

    meridian = h > 12 ? "PM" : "AM";
}

function checkTime(i){
    if (i < 10) {i = '0' + i};
    return i;
}

function getLocalTime() {
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
}


