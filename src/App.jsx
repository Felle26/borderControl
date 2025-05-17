import { useEffect, useState } from "react";
import { Passport } from "./assets/Components/PassPort/Passport.jsx";
import { Checklist } from "./assets/Components/Checklist/checklist.comp.jsx";

import "./App.css";
import { getAllPassportSets } from "./assets/PassportService.js";
import { SelectPassPort } from "./assets/Components/SelectPassPort/SelectPassPort.jsx";

function App() {
  const [checklistVisible, setChecklistVisible] = useState(false);
  const [checklistData, setChecklistData] = useState([
    { id: 1, name: "Passport" },
    { id: 2, name: "Visa" },
    { id: 3, name: "Health Insurance" },
    { id: 4, name: "Flight Ticket" },
    { id: 5, name: "Hotel Reservation" },
  ]);
  const [passportSetContent, setPassportSetContent] = useState([]);
  const [currentPassportSetIndex, setCurrentPassportSetIndex] = useState(0);
  const [currentPassportSet, setCurrentPassportSet] = useState(null);

  const onSelect = () => {
    const nextIndex = currentPassportSetIndex + 1;
    setCurrentPassportSetIndex(nextIndex);
    setCurrentPassportSet(passportSetContent[nextIndex]);
  };

  const handleChecklistToggle = () => {
    console.log("Checklist button clicked");
    setChecklistVisible(!checklistVisible);
  };

  useEffect(() => {
    const passportSets = getAllPassportSets();
    setPassportSetContent(passportSets);
    setCurrentPassportSet(passportSets[currentPassportSetIndex]);
  }, []);

  return (
    <>
      <h1>Border Office</h1>
      <div className="Passport_Container">
        {currentPassportSet && (
          <>
            <Passport PassportData={currentPassportSet[0]} />
            <Passport PassportData={currentPassportSet[1]} />
            <Passport PassportData={currentPassportSet[2]} />
          </>
        )}
      </div>
      {checklistVisible && (
        <div className="Checklist_Container">
          <Checklist
            checklistData={checklistData}
            handleChecklistToggle={handleChecklistToggle}
          />
        </div>
      )}
      <div className="SelectPassPort_Container">
        <SelectPassPort onSelect={onSelect} />
      </div>
      <div className="Checklist">
        <button className="Checklist_Button" onClick={handleChecklistToggle}>
          Open Checklist
        </button>
      </div>
    </>
  );
}

export default App;
