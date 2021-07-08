import express from 'express';
import patientData from '../../data/patients.json';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientData).json();
});

router.post('/', (_req, res) => {
  res.send('Added patient data!');
});

export default router;