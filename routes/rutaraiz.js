
const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/logMiddleware');

router.get('/', logMiddleware("Has accedido a la ruta raíz"), (req, res) => {
    const fechaActual = new Date();
    res.send(`Hola, estás en la raíz. Fecha y hora actuales: ${fechaActual}`);
});

router.get('/home', logMiddleware("Has accedido a la ruta HOme"), (req, res) => {
    const fechaActual = new Date();
    res.send(`Hola, estás en home. Fecha y hora actuales: ${fechaActual}`);
});


module.exports = router;
