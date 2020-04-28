function jsClock() {
    let clock = document.getElementById('js-clock');
    let time = new Date()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let seconds = time.getSeconds()
    clock.innerText = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${seconds < 10 ? `0${seconds}` : seconds}`
}

function init() {
    jsClock()
    setInterval(jsClock, 1000)
}
init();