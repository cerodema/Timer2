function c(str){return document.querySelector(str);}

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
    alarmCheck(c("#time-on"), c("#time-set"));
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



// ...
function changeMinSecToTime(value){
  var min, sec, minSec;
  if(value.length == 3){
     min = value.slice(0,1);
     sec = value.slice(1);
     minSec = [min, sec];
    return minSec;
  } else if(value.length == 4){
     min = value.slice(0,2);
     sec = value.slice(2);
     minSec = [min, sec];
    return minSec;
  }
}

function setTimer(){
  var setShow = c("#time-set");
  var setTime = c("#hour").value +":"+ checkTime(changeMinSecToTime(c("#minute-second").value)[0]) +":"+ changeMinSecToTime(c("#minute-second").value)[1];
  setShow.innerHTML = setTime;
}

//...
function alarmCheck(clock, timer){
  if(timer.innerHTML == clock.innerHTML ){
    alert("Time Out!");
    setTimeOut();
  }
  
}

function setHour(i){
  c("#hour").value = i;
}
