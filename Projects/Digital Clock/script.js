const clock = document.querySelector("#digitalClock")

setInterval(function(){

    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString()

},1000)