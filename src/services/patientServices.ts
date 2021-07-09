import { patientData } from "../../data/patients";
import { NonSensitiviePatientData } from "../types";

const getEntries = (): NonSensitiviePatientData[] => {
  return patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};

const addEntry = () => {
  return [];
};

export default {
  getEntries,
  addEntry
};