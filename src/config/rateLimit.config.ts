import rateLimit from "express-rate-limit";

const limiterGlobal = rateLimit({
    windowMs: 10 * 60 * 1000,
    max: 100,
    message: 'Demasiadas solicitudes desde esta IP, por favor intente de nuevo después de 10 minutos'
});

export default limiterGlobal;