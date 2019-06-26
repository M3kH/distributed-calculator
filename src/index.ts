import express from 'express';
const app = express();
const port = 3000;

app.get('/divide/:dividend/:divisor', (req, res) => {
    return res.status(200).send((req.params.dividend / req.params.divisor).toLocaleString());
});

app.get('/pong', (req, res) => {
    return res.status(200).send('pong');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
