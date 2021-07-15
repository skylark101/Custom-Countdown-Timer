

let title,detail,date,time,dt,month,yr,hrs,mins;

document.querySelector('.get').addEventListener('click',function(){

  document.querySelector('.title').style.visibility = "hidden";
  document.querySelector('.detail').style.visibility = "visible";

});

document.querySelector('.set').addEventListener('click',function(){

  document.querySelector('.detail').style.visibility = "hidden";
  document.querySelector('.time').style.visibility = "visible";

});


document.querySelector('.go').addEventListener('click',function(){

  document.querySelector('.time').style.visibility = "hidden";
  document.querySelector('.show').style.visibility = "visible";

    title = document.getElementById('title').value;
    detail = document.getElementById('detail').value;
    document.getElementById('Title').innerHTML = title;
    document.getElementById('Detail').innerHTML = detail;
  });

   function calculate(){
    date = document.getElementById('date').value;
    time = document.getElementById('time').value;

    if (parseInt(time[0]) < 1)
    {
      hrs = parseInt(time[1]);
    }
    if (parseInt(time[0]) > 0)
    {
      hrs = parseInt(time[0] + time[1]);
    }

    if (parseInt(time[3]) < 1)
    {
      mins = parseInt(time[4]);
    }
    if (parseInt(time[3]) > 0)
    {
      mins = parseInt(time[3] + time[4]);
    }
    console.log(hrs , mins);

    var sec2 = hrs*3600 + mins*60;

    var totSec = (new Date(date));

    var currTime = new Date();

    var seconds = ((totSec - currTime)/1000) + sec2 - 19800;

    var days = Math.floor(seconds/3600/24);
    var hours = Math.floor((seconds/3600) % 24);
    var minutes = Math.floor((seconds/60) %60);
     seconds = Math.floor(seconds%60);

     if (days == 1)
     {
       document.querySelector('.hdays').innerHTML = "Day";
     }
     if (days != 1)
     {
       document.querySelector('.hdays').innerHTML = "Days";
     }
     if (hours == 1)
     {
       document.querySelector('.hhrs').innerHTML = "Hour";
     }
     if (hours != 1)
     {
       document.querySelector('.hhrs').innerHTML = "Hours";
     }
     if (minutes == 1)
     {
       document.querySelector('.hmins').innerHTML = "Minute";
     }
     if (minutes != 1)
     {
       document.querySelector('.hmins').innerHTML = "Minutes";
     }
     if (seconds == 1)
     {
       document.querySelector('.hsecs').innerHTML = "Second";
     }
     if (seconds != 1)
     {
       document.querySelector('.hsecs').innerHTML = "Seconds";
     }
     if (hours < 10)
     {
       hours = '0' + hours;
     }
     if (minutes < 10)
     {
       minutes = '0' + minutes;
     }
     if (days < 10)
     {
       days = '0' + days;
     }
     if (seconds < 10)
     {
       seconds = '0' + seconds;
     }

     document.getElementById('remDays').innerHTML = days;
     document.getElementById('remHrs').innerHTML = hours;
     document.getElementById('remMins').innerHTML = minutes;
     document.getElementById('remSecs').innerHTML = seconds;
 }

 setInterval(calculate,1000);
