import { NewPatientEntry, Gender } from "../types";

type Fields = { name: unknown, dateOfBirth: unknown, ssn: unknown, gender: unknown, occupation: unknown };

const toNewPatientEntry = ({ name, dateOfBirth, ssn, gender, occupation } : Fields ): NewPatientEntry => {
  const newEntry: NewPatientEntry = {
    name: parseName(name),
    dateOfBirth: parseDateOfBirth(dateOfBirth),
    ssn: parseSsn(ssn),
    gender: parseGender(gender),
    occupation: parseOccupation(occupation)
  };
  return newEntry;
};

const isString = (text: unknown): text is string => {
  return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date));
};

const parseName = (name: unknown): string => {
  if (!name || !isString(name)) {
    throw new Error ('Incorrect or missing name');
  }
  return name;
};

const parseDateOfBirth = (dateOfBirth: unknown): string => {
  if (!dateOfBirth || !isString(dateOfBirth) || !isDate(dateOfBirth)) {
    throw new Error (`Incorrect or missing date of birth: ${dateOfBirth}. Please enter the date of birth in ISO format.`);
  }
  return dateOfBirth;
};

const parseSsn = (ssn: unknown): string => {
  if (!ssn || !isString(ssn)) {
    throw new Error ('Incorrect or missing ssn');
  }
  return ssn;
};

// REVIEW LINES 43 - 45 to distinguish why we use type: any
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (param: any): param is Gender => {
  return Object.values(Gender).includes(param);
};


const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error ('Incorrect or missing gender');
  }
  return gender;
};

const parseOccupation = (occupation: unknown): string => {
  if (!occupation || !isString(occupation)) {
    throw new Error ('Incorrect or missing occupation');
  }
  return occupation;
};

export default toNewPatientEntry;