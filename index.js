const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Hi There!' });
});

const PORT = process.env.PORT;
app.listen(PORT);
