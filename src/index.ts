import express, { Application } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 5000;

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/health', (req, res) => {
  res.send({ status: 200, message: 'Up & Running' });
});

app.listen(port, () => console.log(`Running on port ${port}`));
