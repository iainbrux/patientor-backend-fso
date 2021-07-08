import express from 'express';
import diagnosisData from '../../data/diagnoses.json';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnosisData).json();
});

router.post('/', (_req, res) => {
  res.send('Posted a diagnosis!');
});

export default router;