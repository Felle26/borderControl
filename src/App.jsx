import { useEffect, useState } from "react";
import { Passport } from "./assets/Components/PassPort/Passport.jsx";
import { Checklist } from "./assets/Components/Checklist/checklist.comp.jsx";

import "./App.css";
import { Decider } from "./assets/Components/Decider/Decider.jsx";
import { getAllPassports } from "./assets/passportService.js";

function App() {
  const [checklistVisible, setChecklistVisible] = useState(false);
  const [deciderVisible, setDeciderVisible] = useState(true);
  const [checklistData, setChecklistData] = useState([
    { id: 1, name: "Passport" },
    { id: 2, name: "Visa" },
    { id: 3, name: "Health Insurance" },
    { id: 4, name: "Flight Ticket" },
    { id: 5, name: "Hotel Reservation" },
  ]);
  const [passportContent, setPassportContent] = useState([]);
  const [currentPassportIndex, setCurrentPassportIndex] = useState(0);
  const [currentPassport, setCurrentPassport] = useState(null);

  useEffect(() => {
    const passports = getAllPassports();
    setPassportContent(passports);
    setCurrentPassport(passports[currentPassportIndex]);
  }, []);

  const handleChecklistToggle = () => {
    console.log("Checklist button clicked");
    setChecklistVisible(!checklistVisible);
  };

  const onDecideApprove = () => {
    currentPassport.status = "approved";
    console.log("onDecide approve");
    switchToNextPassport();
  };

  const onDecideDeny = () => {
    currentPassport.status = "denied";
    console.log("onDecide deny");
    switchToNextPassport();
  };

  const switchToNextPassport = () => {
    const nextIndex = currentPassportIndex + 1;
    setCurrentPassportIndex(nextIndex);
    setCurrentPassport(passportContent[nextIndex]);
  };

  return (
    <>
      <h1>Border Office</h1>
      <div className="Passport_Container">
        {currentPassport && <Passport PassportData={currentPassport} />}
      </div>
      {deciderVisible && (
        <div className="Decider_Container">
          <Decider onApprove={onDecideApprove} onDeny={onDecideDeny} />
        </div>
      )}
      {checklistVisible && (
        <div className="Checklist_Container">
          <Checklist
            checklistData={checklistData}
            handleChecklistToggle={handleChecklistToggle}
          />
        </div>
      )}
      <div className="Checklist">
        <button className="Checklist_Button" onClick={handleChecklistToggle}>
          Open Checklist
        </button>
      </div>
    </>
  );
}

export default App;
