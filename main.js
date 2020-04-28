//get the current time and put into d
var d = new Date();

//get the current hour and put into h
var h = d.getHours();
//get the current minute and put into m
var m = d.getMinutes();

//add minutes to h. eg. h=15.5 is 3.30pm
h = h + m / 60;

console.log(h);


//if hour is between 8 and 11
if ((h >= 8) && (h <= 11)) {
    var x = document.getElementById("breakfast");
    x.style.display = "block";
}

//if hour is between 11 and 14
if ((h >= 11) && (h <= 14)) {
    var x = document.getElementById("lunch");
    x.style.display = "block";
}
//if hour is between 16 and 22

if ((h >= 16) && (h <= 22)) {
    var x = document.getElementById("dinner");
    x.style.display = "block";
}
