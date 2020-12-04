const express = require('express');
const data = require('./data.js');
const app = express();

app.get('/api/products', (request, response) => {
    response.send(data.products);
});

app.listen(5000, () => {
    console.log('serve at http://localhost:5000');
});
