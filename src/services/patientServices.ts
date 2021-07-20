import { patientData } from "../../data/patients";
import { NonSensitiviePatientData, NewPatientEntry, PatientData } from "../types";
import { v4 as uuidv4 } from 'uuid';

const id = uuidv4();

const getEntries = (): NonSensitiviePatientData[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addPatient = (entry: NewPatientEntry): PatientData => {
  const newPatientEntry = {
    id,
    ...entry
  };
  patientData.push(newPatientEntry);
  return newPatientEntry;
};

const addEntry = () => {
  return null;
};

const findById = (id: string): PatientData | undefined => {
  const entry = patientData.find(patient => patient.id === id);
  return entry;
};

export default {
  getEntries,
  addPatient,
  addEntry,
  findById
};