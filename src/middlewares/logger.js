function requestLogger(req,res,next){
    const start = Date.now();
    const {method, originalUrl} = req;(

    //* Escuchamos cuando la respuesta termine para calcular el tiempo de respuesta
    res.on('finish',()=>{
        const duration = Date.now() - start;
        const status = res.statusCode;
        console.log(`[${new Date().toISOString()}] ${method} ${originalUrl} ${status} - ${duration}ms`);
    }));

    next(); //*Pasa la petición al siguiente middleware o controlador
}

module.exposts = requestLogger;