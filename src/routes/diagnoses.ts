import express from 'express';
import diagnonsisService from '../services/diagnosisService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(diagnonsisService.getEntries()).json();
});

router.post('/', (_req, res) => {
  res.send('Posted a diagnosis!');
});

export default router;