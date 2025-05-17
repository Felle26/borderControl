import passportData from "./Passports.json";

// Get all passports
export const getAllPassportSets = () => {
    return passportData.passportSets;
};
