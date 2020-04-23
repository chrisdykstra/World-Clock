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
    document.getElementById('digitalClock').innerHTML =
        h + ":" + m + ":" + s;
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
}


function getLocalTime() {
    let today = new Date();
    h = today.getHours();
    m = today.getMinutes();
    s = today.getSeconds();
}

function checkTime(number) {
    if (number < 10) { number = "0" + number };  // add zero in front of numbers < 10
    return number;         //will need this function to fix minutes and seconds
}