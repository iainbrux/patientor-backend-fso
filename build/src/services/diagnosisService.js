"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diagnoses_1 = require("../../data/diagnoses");
const getEntries = () => {
    return diagnoses_1.diagnosisData;
};
const addEntry = () => {
    return [];
};
exports.default = {
    getEntries,
    addEntry
};
