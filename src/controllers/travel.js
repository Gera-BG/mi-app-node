const {getExchangeRate} = require('../services/currencyService');
const {getWeatherByCoordinates} = require('../services/weatherService');

async function getTravelSummary(req, res){
    const {lat, lon, from, to} = req.query;

    try{
        // *Ejecuta ambas peticiones http al mismo tiempo
        const[weather,currency] = await Promise.all([
            getWeatherByCoordinates(lat, lon),
            getExchangeRate(from.toUpperCase(), to.toUpperCase())
        ]);

        return res.json({
            succes:true,
            data:{
                destinationWeather : weather,
                exchangeRate : currency
            }
        });
    }catch(error){
        return res.status(500).json({error: error.message});
    }
}

module.exports = { getTravelSummary };