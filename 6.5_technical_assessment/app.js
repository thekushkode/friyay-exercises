const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const pgp = require('pg-promise')();
const PORT = process.env.PORT || 3000;

// app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/invoices', (req, res) => {
    res.render('invoices.ejs');
});

app.post('/invoices', (req, res) => {
    // req.body = {
    //     "invoice_number": "12345",
    //     "total": "199.99",
    //     "currency": "USD",
    //     "invoice_date": "2019-08-17",
    //     "due_date": "2019-09-17",
    //     "vendor_name": "Acme Cleaners Inc.",
    //     "remittance_address": "123 ABC St. Charlotte, NC 28209"
    // };
    res.send(req.body);
});

app.listen(PORT, () => console.log(`Listening on: http://localhost:${PORT}`));