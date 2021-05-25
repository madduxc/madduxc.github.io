//AVWX key = aIq5TyRbgL_40gpOsOY-Qqrp5WbCjeFE0upp1iy9W8o

document.addEventListener("DOMContentLoaded", bindButtons);

function bindButtons(){
    document.getElementById("chartSubmit").addEventListener("click", function(event){
    var req = new XMLHttpRequest();
    var payload = {chart:null};
    payload.chart = document.getElementById("chart").value;
    req.open('GET', 'https://private-anon-ebb4745603-avwx.apiary-proxy.com/api/metar/' + chart.value);
    req.setRequestHeader('Authorization', 'aIq5TyRbgL_40gpOsOY-Qqrp5WbCjeFE0upp1iy9W8o');
    req.onreadystatechange = function () {
      if (this.readyState === 4) {
        //console.log('Status:', this.status);
        //console.log('Headers:', this.getAllResponseHeaders());
        console.log('Body:', this.responseText);
      }
    };
    
        /*req.open("GET", "https://avwx.rest/api/metar/location?options=translate&airport=true&reporting=true&format=json&onfail=cache" + chart.value + "&group=2", true);*/
    req.addEventListener("load", function() {
        if(req.status >= 200 && req.status < 400) {
            var response = JSON.parse(req.responseText)
            console.log(JSON.parse(req.responseText));
            var list = document.getElementsByClassName("weatherList")
            list[0].style.display = "contents" 
            document.getElementById("raw").textContent = response.raw;
            document.getElementById("time").textContent = response.time.dt + " GMT";
            document.getElementById("wind").textContent = response.wind_speed.value + " kts at " + 
                response.wind_direction.value + " degrees";
            document.getElementById("temp").textContent = response.temperature.value + 
                " deg C (" + Math.floor(response.temperature.value* 9/5 + 32) + " deg F)";
            document.getElementById("dew").textContent = response.dewpoint.value + 
                " deg C (" + Math.floor(response.dewpoint.value* 9/5 + 32) + " deg F)";
            document.getElementById("alt").textContent = response.altimeter.value + response.units.altimeter;
            document.getElementById("vis").textContent = response.visibility.value + "statute miles";
            }
        else {
            console.log("Error in network request: " + req.statusText);
    }})
    req.send(null);
    event.preventDefault();
    })
}
var images = [
    "1.jpg",
    "2.jpg",
    "3.jpg"
];
var num = 0;
function next() {
    var slider = document.getElementById("slider");
    num += 1;
    if(num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}
function prev() {
    var slider = document.getElementById("slider");
    num -= 1;
    if(num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num]
var t.onload = setInterval(next, 5000);
}
