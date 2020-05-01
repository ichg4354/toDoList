
const COORDS = 'coords'
const APIKEY = '7300a10a4007c119b0ac362e81fa95fa'


function saveCoords(coordsObj) {
    localStorage.setItem(COORDS,JSON.stringify(coordsObj))
}

function getWeather() {
    
}


function success(locationData) {
    const latitude = locationData.coords.latitude
    const longitude = locationData.coords.longitude
    const coordsObj = {
        longitude: longitude,
        latitude: latitude,
    }
    saveCoords(coordsObj)

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
        
    }
}




function init() {
    Location();
}
init();