const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
});

app.get('/json', (req, res) => {
    res.status(200).json({
        message: 'Hello',
    });
});

app.listen(3000, ()=> {
    console.log('Example to listen posrt 3000');
});