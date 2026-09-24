const axios = require('axios');
require('dotenv').config();

async function getExchangeRate(from, to){
    try{
        const url = process.env.CURRENCY_API_URL;
        //* Concatenamos la moneda base en la URL (ej: https://open.er-api.com/v6/latest/USD)
        const response = await axios.get(`${url}/${from}`);
        if(response.data.result !== 'success'){
            throw new Error('Error al obtener la tasa de cambio: '+response.data.error);
        }

        const rates = response.data.rates;
        const tarjetRate = rates[to];
        if(!tarjetRate){
            throw new Error(`No se encontró la tasa de cambio para la moneda ${to}`);
        }

        return{
            base: from,
            target: to,
            rate: response.data.rates[to],
            lastUpdate: response.data.time_last_update_utc
        };
        console.log('Respuesta del servidor de divisas');
    }catch(error){
        console.error('Error al conectar con el servidor de divisas:', error.message);
        throw new Error('Error al conectar con el servidor de divisas: '+error.message);
    }
}

module.exports = {
    getExchangeRate
};