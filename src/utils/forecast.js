const request = require('request')

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/de9507261afaa9ee3e28559c1fbed630/'+lat+','+long
    
    request({ url, json: true }, (error, { body }) => {
        if(error) {
            callback('Unable to connect to forecast services', undefined)
        } else if (body.error) {
            callback('Invalid request.', undefined)
        } else {
            callback(undefined,{
                temperature: body.currently.temperature,
                humidity: body.currently.humidity,
                windSpeed: body.currently.windSpeed
            })
        }
    })
}

module.exports = forecast