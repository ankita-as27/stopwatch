let timerDisplay=document.querySelector('.timerDisplay');
let startButton=document.getElementById('startBtn');
let stopButton=document.getElementById('stopBtn');
let resetButton=document.getElementById('resetBtn');

let msec=0;
let sec=0;
let mins=0;

let timerId=null;

startButton.addEventListener('click',function(){
    if (timerId!==null){
        clearInterval(timerId);
    }
    timerId = setInterval(startTimer,10);
    
});

stopButton.addEventListener('click',function(){
    clearInterval(timerId);
    
});

resetButton.addEventListener('click',function(){
    clearInterval(timerId);
    timerDisplay.innerHTML="00 : 00 : 00";
    
    
});

function startTimer(){
    msec++;
    if(msec===100){
        msec=0;
        sec++;
        if(sec===60){
            sec=0;
            mins++;
        }
    }

    let msecString = msec <10? `0${msec}` : msec;
    let secString = sec <10? `0${sec}` : sec;
    let minsString = mins <10? `0${mins}` : mins;

    timerDisplay.innerHTML=`${minsString} : ${secString} : ${msecString}`;
}