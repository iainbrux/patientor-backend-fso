import express from 'express';
const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  console.log('Are we playing tennis?');
  res.status(200).send('Pong!').end();
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log('Server started on port 3003.');
});