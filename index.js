const express = require('express');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.get('/hello', (req, res) => {
    res.status(200).json({ result: 'hello' });
});

app.post('/add', (req, res) => {
    try {
        let { num1, num2 } = req.body;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        res.status(200).json({
            operation: `${num1} + ${num2}`,
            result: add(num1, num2)
        });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
});


//Hay que exportar el servidor para utilizarlo en el test, lo declaramos en una variable. 

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

module.exports = server;