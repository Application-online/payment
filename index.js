// let (0) = "Sunday";
if(new Date().getFullYear() < 12){
    console.log("said")
}
let day;
let time
if(new Date().getDay() == 0)day = "Sunday";
if(new Date().getDay() == 1)day = "Monday";
if(new Date().getDay() == 2)day = "Tuesday";
if(new Date().getDay() == 3)day = "Wednesday";
if(new Date().getDay() == 4)day = "Thursday";
if(new Date().getDay() == 5)day = "Friday";
if(new Date().getDay() == 6)day = "Saturday";

document.getElementById("day").innerHTML = day
setInterval(() => {
    let hour = new Date().getHours() + 1;
    let minute = new Date().getMinutes();
    let seconds = new Date().getSeconds();
    time = hour+":"+minute+":"+seconds 
    
    document.getElementById("time").innerHTML = time;
}, 1000);
console.log(time)