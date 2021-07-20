export type DiagnosisData = {
  code: string;
  name: string;
  latin?: string;
};

export type PatientData = {
  id: string;
  name: string;
  dateOfBirth: string;
  ssn: string;
  gender: string;
  occupation: string;
};

export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export type NonSensitiviePatientData = Omit<PatientData, 'ssn'>;
export type NewPatientEntry = Omit<PatientData, 'id'>;
