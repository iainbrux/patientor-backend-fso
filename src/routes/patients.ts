import express from 'express';
import patientService from '../services/patientServices';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getEntries()).json();
});

router.post('/', (_req, res) => {
  res.send('Added patient data!');
});

export default router;