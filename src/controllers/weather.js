// * El controlador recibe la petición HTT del cliente, valida los datos y llama al servicio
const {getWeatherByCoordinates} = require('../services/weatherService');

async function getWeather (req, res){
    const { lat, lon} = req.query;
    if(!lat || !lon){
        return res.status(400).json({error:'Faltan parámetros de latitud y longitud'});
    }

    try{
        const weatherData = await getWeatherByCoordinates(lat, lon); 
        return res.json({
            success: true,
            data: weatherData
        });
    }catch(error){
        console.error('Error al obtener el clima:', error);
        return res.status(500).json({error: error.message});
    }
}

module.exports = {getWeather};