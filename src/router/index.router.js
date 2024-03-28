const { Router } = require('express');
const route = Router();

route
    .get('/', (req, res) => {
        res.json({ message: 'Bienvenido a la ApiRest' })
    })
    .get('/healthy', (req, res) => { res.json({ message: 'Verificación de funcionamiento de ApiRest v2' }) })

module.exports = route;
