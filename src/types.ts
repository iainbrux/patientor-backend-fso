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

export type NonSensitiviePatientData = Omit<PatientData, 'ssn'>;

