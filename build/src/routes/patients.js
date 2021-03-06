"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const patientServices_1 = __importDefault(require("../services/patientServices"));
const patientServices_2 = __importDefault(require("../services/patientServices"));
const utils_1 = __importDefault(require("./utils"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(patientServices_2.default.getEntries()).json();
});
router.post('/', (req, res) => {
    try {
        const newPatientEntry = utils_1.default(req.body);
        const addedEntry = patientServices_1.default.addPatient(newPatientEntry);
        res.json(addedEntry);
    }
    catch (err) {
        res.status(400).send(err.message);
    }
});
exports.default = router;
