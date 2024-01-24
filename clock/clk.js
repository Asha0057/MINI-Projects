let clock=setInterval(timer,100);

function timer()
{
    let time = new Date()

    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let yr = time.getFullYear();
    let mon = time.getMonth();
    let date1 = time.getDate();
    let days = time.getDay();


//TIME
    if (hr>12)
    {
        hr-=12;
        document.getElementById("ampm").innerHTML="PM";
    }
    if(hr==0)
    {
        hr=12;
        document.getElementById("ampm").innerHTML="AM";
    }
    hr=(hr<10)?"0"+hr:hr;
    min=(min<10)?"0"+min:min;
    sec=(sec<10)?"0"+sec:sec;
    document.getElementById("hour").innerHTML = hr;
    document.getElementById("min").innerHTML = min;
    document.getElementById("sec").innerHTML = sec;
//DATE
    document.getElementById("date").innerHTML=date1;
    document.getElementById("month").innerHTML=mon;
    document.getElementById("year").innerHTML=yr;
//DAYS
    if(days==1)
    {
        days="MON";
    }
    else if(days==2)
    {
        days="TUES";
    }
    else if(days==3)
    {
        days="WED"
    }
    else if(days==4)
    {
        days="THURS"
    }
    else if(days==5)
    {
        days="FRI"
    }
    else if(days==6)
    {
        days="SAT"
    }
    else
    {
        days="SUN"
    }
    document.getElementById("day").innerHTML=days;
}
let notdark=true;
let button=document.querySelector("button");
button.addEventListener('click',modecolor);
function modecolor()
{
    if(notdark)
    {
        document.body.style.background ="radial-gradient(circle, rgba(122,119,121,1) 9%, rgba(15,15,15,0.9613970588235294) 90%)";
        document.body.style.color="white";
        button.style.background="#d1d1e0";
        button.innerHTML="Dark"
    }
    else{
        document.body.style.background ="radial-gradient(circle, rgba(238,174,202,1) 9%, rgba(148,187,233,1) 90%)";
        document.body.style.color="black";
        button.style.background="#ffccff";
        button.innerHTML="Light"
    }

    notdark=!notdark;
}
    


