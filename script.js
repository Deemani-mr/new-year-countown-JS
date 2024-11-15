const days = document.getElementById("days");
const hr = document.getElementById("hr");
const min = document.getElementById("min")
const sec = document.getElementById("sec");
const year = document.getElementById("year");

let currentyear = new Date().getFullYear();

let nextyear = currentyear + 1;

year.innerText = nextyear;

let nextyeartime = new Date(`jan 01 ${nextyear} 00:00:00`)

function updatecound(){
    let currenttime = new Date();
    let dif = nextyeartime - currenttime

    let d = Math.floor(dif/1000/60/60/24)
    let h = Math.floor(dif/1000/60/60) % 24;
    let m = Math.floor(dif / 1000 / 60 ) % 60;
    let s = Math.floor(dif / 1000) % 60;
      

    days.innerHTML = d < 10 ? "0" + d : d;  // 5<10 ? "0" + 5 : 5;
    hr.innerHTML = h < 10 ? "0" + h : h;
    min.innerHTML = m < 10 ? "0" + m : m;
    sec.innerHTML = s < 10 ? "0" + s : s;
}

setInterval(updatecound,1000)