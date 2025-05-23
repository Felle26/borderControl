import "./PassportList.css";
import { useEffect, useState } from "react";
import { getAllPassportSets } from "../../PassportService.js";
import { Passport } from "./Passport.jsx";

export function PassportList() {
  const [passportSetContent, setPassportSetContent] = useState([]);
  const [currentPassportSetIndex, setCurrentPassportSetIndex] = useState(0);
  const [currentPassportSet, setCurrentPassportSet] = useState(null);

  const [currentSelectedPassport, setCurrentSelectedPassport] = useState(null);

  const onSelect = () => {
    const nextIndex = currentPassportSetIndex + 1;
    setCurrentPassportSetIndex(nextIndex);
    setCurrentPassportSet(passportSetContent[nextIndex]);
  };

  const handleSubmit = (currentPassport) => {
    console.log("handleSubmit: " + currentPassport.Id);
    onSelect();
  };

  const handleSelectPassport = (currentPassport) => {
    console.log("handleSelectPassport: " + currentPassport)
    if (currentPassport === currentSelectedPassport) {
      setCurrentSelectedPassport(null);
      return;
    }

    setCurrentSelectedPassport(currentPassport);
    // Handle the selection of a passport
    console.log("Selected Passport ID: ", currentPassport);
  };

  useEffect(() => {
    console.log(currentSelectedPassport);
  }, [currentSelectedPassport]);

  useEffect(() => {
    const passportSets = getAllPassportSets();
    setPassportSetContent(passportSets);
    setCurrentPassportSet(passportSets[currentPassportSetIndex]);
  }, []);

  return (
    <>
      <div className="Passport_List_Container">
        {currentPassportSet &&
          currentPassportSet.map((passport, index) => (
            <div
              key={passport.Id}
              className={
                currentSelectedPassport === passport.Id
                  ? "Passport_Single_Container Selected_Passport"
                  : "Passport_Single_Container"
              }
            >
              <Passport
                PassportData={passport}
                handleSelectPassport={handleSelectPassport}
                handleSubmit={handleSubmit}
                IsSelected={currentSelectedPassport === passport.Id}
              />
            </div>
          ))}
      </div>
    </>
  );
}
