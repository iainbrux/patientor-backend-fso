import express from 'express';
import cors from 'cors';
import diagnosisRouter from './routes/diagnoses';
const app = express();
app.use(express.json());
// eslint-disable-next-line @typescript-eslint/no-unsafe-call
app.use(cors());

app.get('/api/ping', (_req, res) => {
  console.log('Are we playing tennis?');
  res.status(200).send('Pong!').end();
});

app.use('/api/diagnoses', diagnosisRouter);

const PORT = 3003;

app.listen(PORT, () => {
  console.log('Server started on port 3003.');
});