
const COORDS = 'coords'
const APIKEY = '7300a10a4007c119b0ac362e81fa95fa'
const weather_container = document.querySelector('.weather_container')


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))
}

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`).then(function (result) {
        const json = result.json()
        return json.then(function (json) {
            const temp = json.main.temp
            const position = json.name
            weather_container.innerText = `${temp}도, ${position}`
        })
    })
}




function success(locationData) {
    const latitude = locationData.coords.latitude
    const longitude = locationData.coords.longitude
    const coordsObj = {
        longitude: longitude,
        latitude: latitude,
    }
    saveCoords(coordsObj)
    getWeather(latitude,longitude)
}

function fail() {
    console.log('Failed To Get Location Data')
}


function getLocation() {
    const coords = navigator.geolocation.getCurrentPosition(success,fail)
}


function Location() {
    const loadedLocation = localStorage.getItem(COORDS)
    if (loadedLocation === null) {
        getLocation()
    } else {
        const parsedLoadedLocation = JSON.parse(loadedLocation)
        const latitude = parsedLoadedLocation.latitude;
        const longitude = parsedLoadedLocation.longitude;
        getWeather(latitude,longitude)
    }
}

function init() {
    Location();
}
init();