import express from 'express';
import patientServices from '../services/patientServices';
import patientService from '../services/patientServices';
import toNewPatientEntry from './utils';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(patientService.getEntries()).json();
});

router.post('/', (req, res) => {
  try {
    const newPatientEntry = toNewPatientEntry(req.body);
    const addedEntry = patientServices.addPatient(newPatientEntry);
    res.json(addedEntry);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

export default router;