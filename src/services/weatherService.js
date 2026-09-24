const axios = require('axios');

async function getWeatherByCoordinates(lat, lon){
    try{
        const url = process.env.WEATHER_API_URL;
        const response = await axios.get(url,{
            params: {
                latitude:lat,
                longitude:lon,
                current_weather : true
            }
        });
        // * Limpiamos la respuesta para devolver solo lo necesario
        return {
            temperature: response.data.current_weather.temperature,
            windspeed: response.data.current_weather.windspeed,
            time: response.data.current_weather.time
        };
        console.log('Respuesta del servidor del clima');

    }catch(error){
        throw new Error('Error al conectar con el servidor del clima'+error.message);
    }
}

module.exports = {
    getWeatherByCoordinates
}