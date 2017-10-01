const express = require('express'),
    app = express();

app.use(express.static('assets'));

app.get('/', (req, res) => {
    res.sendFile('/index.html');
});

app.get('/userform', (req, res) => {
    const response = {
        first_name: req.query.first_name,
        last_name: req.query.last_name
    };
    res.end(JSON.stringify(response));
});

const server = app.listen(3000, 'localhost', () => {
    const host = server.address()
        .address,
        port = server.address()
        .port;

    console.log(`Przykładowa aplikacja, nasłuchuje na http://${host}:${port}`);
});