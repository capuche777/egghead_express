const express = require('express');
const app = express();

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {title: 'Express Server', message: 'Hola Mundo'})
})

app.get('/yo', (req, res) => {
    res.send('Soy yo Prro!!!')
})

const server = app.listen(3000, () => {
    console.log(`Server is running at http://localhost:${server.address().port}`)
});