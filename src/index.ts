import express from 'express';
import promMid from 'express-prometheus-middleware';

const app = express();
const port = 3000;

app.use(promMid({
    metricsPath: '/metrics',
    collectDefaultMetrics: true,
    requestDurationBuckets: [0.1, 0.5, 1, 1.5],
}));

app.get('/divide/:dividend/:divisor', (req, res) => {
    return res.status(200).send((req.params.dividend / req.params.divisor).toLocaleString());
});

app.get('/ping', (req, res) => {
    return res.status(200).send('pong');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
