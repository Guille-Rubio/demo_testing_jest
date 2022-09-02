const express = require('express');
const { add } = require('./calculator');
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/add?', (req, res) => {
    try {
        let { num1, num2 } = req.query;
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

app.get('/deduct?', (req, res) => {
    try {
        let { num1, num2 } = req.query;
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        res.status(200).json({
            operation: `${num1} - ${num2}`,
            result: substract(num1, num2)
        });

    } catch (error) {
        console.log(error.message)
        res.status(400).json({ error: error.message });
    }
});

app.get('/hello', (req, res) => {
    res.status(200).json({ result: 'hello' });
});


const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});



module.exports = app;