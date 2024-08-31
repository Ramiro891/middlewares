
const logMiddleware = (mensaje) => {
    return (req, res, next) => {
        const fechaActual = new Date().toLocaleString();
        console.log(`Fecha y hora: ${fechaActual}`);
        console.log(mensaje);
        res.send(`Fecha y hora: ${fechaActual}<br>${mensaje}`);
    };
};

module.exports = logMiddleware;

