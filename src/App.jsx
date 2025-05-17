import { useState } from 'react'
import { Passport } from './assets/Components/PassPort/Passport.jsx'
import { Checklist } from './assets/Components/Checklist/checklist.comp.jsx'

import './App.css'

function App() {
  const [checklistVisible, setChecklistVisible] = useState(false);
  const [checklistData, setChecklistData] = useState([
    { id: 1, name: "Passport" },
    { id: 2, name: "Visa" },
    { id: 3, name: "Health Insurance" },
    { id: 4, name: "Flight Ticket" },
    { id: 5, name: "Hotel Reservation" }
  ]);
  const [passportContent] = useState({
    Country: "Germany",
    PassportType: "Identity Card",
    PassportNumber: "0567890",
    Name: "Max",
    Surname: "Mustermann",
    DateOfBirth: "16.12.1990",
    IssuedBy: "Germany",
    IssueDate: "01.01.2020",
    ExpiryDate: "01.01.2030",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Flag_of_Germany.svg/2560px-Flag_of_Germany.svg.png"
  })

  const handleChecklistToggle = () => {
    console.log("Checklist button clicked");
    setChecklistVisible(!checklistVisible);
  }
  
  

  return (
    <>
      <h1>Border Office</h1>
      <div className="Passport_Container">
        <Passport PassportData={passportContent} />
        <Passport PassportData={passportContent} />
        <Passport PassportData={passportContent} />
      </div>
      {checklistVisible && (
        <div className="Checklist_Container">
          <Checklist checklistData={checklistData} handleChecklistToggle={handleChecklistToggle} />
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
