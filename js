function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    h = checkHour(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time-on').innerHTML =
    h + ":" + m + ":" + s;
    setHour(h);
    var t = setTimeout(startTime, 500);
    
}
function checkTime(i) {
    if (i < 10) {i = "0" + i;}  // add zero in front of numbers < 10
    return i;
}

function checkHour(i) {
    if (i > 12) {i = i - 12;}  // make hour pm/am
    return i;
}

function c(str){return document.querySelector(str);}

// ...
function changeMinSecToTime(value){
  if(value.length == 3){
    var min = value.slice(0,1);
    var sec = value.slice(1);
    var minSec = [min, sec];
    return minSec;
  }
}
function setTimer(){
  var setShow = c("#timer-set");
  var setTime = c("#hour").value + changeMinSecToTime(c("#minute-second").value)[0] + changeMinSecToTime(c("#minute-second").value)[1];
  setShow.innerHTML = "setTime";
  
}

function setHour(i){
  c("#hour").value = i;
}
