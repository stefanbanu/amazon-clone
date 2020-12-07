import express from 'express';
import cors from 'cors';
import data from './data.js';

const app = express();
app.use(cors());

app.get('/api/products', (req, res) => {
    console.log('retrieving products from server.js');
    res.send(data.products);
});

app.listen(5000, () => {
    console.log('serve at http://localhost:5000');
});
