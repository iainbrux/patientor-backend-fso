import { diagnosisData } from "../../data/diagnoses";
import { DiagnosisData } from "../types";

const getEntries = (): DiagnosisData[] => {
  return diagnosisData;
};

const addEntry = () => {
  return [];
};

export default {
  getEntries,
  addEntry
};