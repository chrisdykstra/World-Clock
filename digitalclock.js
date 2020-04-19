
function startTime(timeDenomination,t = null) {

    if (t != null){
        clearTimeout(t);
    }

    
    let h = timeDenomination[0];
    let m = checkTime(timeDenomination[1]);
    let s = checkTime(timeDenomination[2]);

    document.getElementById('digitalClock').innerHTML =
        h + ":" + m + ":" + s;

    t = setTimeout(function(){
        startTime(timeDenomination,t);
    }, 1000);
}

function getLocalTime() {
    let today = new Date();
    let timeDenomination = [];
    timeDenomination.push(today.getHours());
    timeDenomination.push(today.getMinutes());
    timeDenomination.push(today.getSeconds());

    return timeDenomination;

}

function checkTime(i) {
    // if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}