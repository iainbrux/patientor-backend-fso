"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const patients_1 = require("../../data/patients");
const uuid_1 = require("uuid");
const id = uuid_1.v4();
const getEntries = () => {
    return patients_1.patientData.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
const addPatient = (entry) => {
    const newPatientEntry = Object.assign({ id }, entry);
    patients_1.patientData.push(newPatientEntry);
    return newPatientEntry;
};
const addEntry = () => {
    return null;
};
const findById = (id) => {
    const entry = patients_1.patientData.find(patient => patient.id === id);
    return entry;
};
exports.default = {
    getEntries,
    addPatient,
    addEntry,
    findById
};
