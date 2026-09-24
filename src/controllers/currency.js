const {getExchangeRate} = require('../services/currencyService');


async function getCurrency(req, res){
    const {from,to} = req.query;

    if(!from || !to){
        return res.status(400).json({error: 'Debes proporcionar los parámetros "from" y "to" en la consulta'});
    }

    try{
        const data = await getExchangeRate(from.toUpperCase(), to.toUpperCase());
        return res.json({sucess:true, data});
    }catch(error ){
        console.error('Error al obtener la tasa de cambio:', error.message);
        return res.status(500).json({error: error.message});
    }
}

module.exports = {
    getCurrency
};