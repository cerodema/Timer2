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
function changeMinSecToTime(num){
  var value = removeInitZero(num);
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
    //alert("Time Out!");
    
      c("#container").style.backgroundColor = "red";
    setTimeout(defaultBg, 200);
  }
}

function defaultBg(){
  c("#container").style.backgroundColor = "white";
}


function listenEnter(){
  var minSec = c("#minute-second");
  minSec.addEventListener("keyup", function(ev){
    ev.keyCode = ev.which || ev.keyCode;
    if (ev.keyCode === 13) {
      c("#btn-go").click();
    }
  });
}

listenEnter();

function removeInitZero(num) {
  if (num.slice(0, 1) == 0){
    return num.slice(1);
  } else {
    return num;
  }
}

function wholeBtn(){
  c("#btn-whole").addEventListener('click', function(e){
    wholeSet();
  });
}


function wholeSet(){
  var input = c("#whole");
  var setter = c("#whole-set");
  
  var rg = new RegExp("(\\d\\d:)?\\d\\d:\\d\\d\\s(pm|am)?", "gim");
  var time = rg.exec(input.value);
  c("#whole-set").innerHTML = time[0];
  
}

wholeBtn();

function setHour(i){
  c("#hour").value = i;
}
