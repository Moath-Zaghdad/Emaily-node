const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send({ hi: 'Hi There!', q: 'this is another test!' });
});

const PORT = process.env.PORT;
app.listen(PORT);
