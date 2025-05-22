import { useEffect, useState } from "react";
import { Passport } from "./assets/Components/PassPort/Passport.jsx";
import { Checklist } from "./assets/Components/Checklist/checklist.comp.jsx";
import { MenuButton } from "./assets/Components/MenuButton/MenuButton.comp.jsx";
import { FaBars } from "react-icons/fa";

import "./App.css";
import { getAllPassportSets } from "./assets/PassportService.js";
import { SelectPassPort } from "./assets/Components/SelectPassPort/SelectPassPort.jsx";
import { MainMenu } from "./assets/Components/MainMenu/MainMenu.comp.jsx";

function App() {
  const [checklistVisible, setChecklistVisible] = useState(false);
  const [mainMenuVisible, setMainMenuVisible] = useState(false);

  const [passportSetContent, setPassportSetContent] = useState([]);
  const [currentPassportSetIndex, setCurrentPassportSetIndex] = useState(0);
  const [currentPassportSet, setCurrentPassportSet] = useState(null);

  const onSelect = () => {
    const nextIndex = currentPassportSetIndex + 1;
    setCurrentPassportSetIndex(nextIndex);
    setCurrentPassportSet(passportSetContent[nextIndex]);
  };

  const handleChecklistToggle = () => {
    setChecklistVisible(!checklistVisible);
  };
  const handleMainMenuToggle = () => {
    setMainMenuVisible(!mainMenuVisible);
  };

  const handleSelectPassport = () => {
    // Handle the selection of a passport
    console.log('Selected Passport ID: ');
  }

  useEffect(() => {
    const passportSets = getAllPassportSets();
    setPassportSetContent(passportSets);
    setCurrentPassportSet(passportSets[currentPassportSetIndex]);
  }, []);

  return (
    <>
      <div className="Main_Menu-Button">
        <MenuButton text={<FaBars />} onClick={handleMainMenuToggle} />
      </div>
      {mainMenuVisible && (
        <div className="Main_Menu_Container">
          <MainMenu CloseMenuHandler={handleMainMenuToggle} />
        </div>
      )}
      <h1>Border Office</h1>
      <div className="Passport_Container">
        {currentPassportSet && (
          <>
            <div className="Passport_Wrapper">
              <button
                className="Passport_Select_button"
                onClick={handleSelectPassport}
              ></button>
              <Passport PassportData={currentPassportSet[0]} />
            </div>
            <div className="Passport_Wrapper">
              <button
                className="Passport_Select_button"
                onClick={handleSelectPassport}
              ></button>
              <Passport PassportData={currentPassportSet[1]} />
            </div>
            <div className="Passport_Wrapper">
              <button
                className="Passport_Select_button"
                onClick={handleSelectPassport}
              ></button>
              <Passport PassportData={currentPassportSet[2]} />
            </div>
          </>
        )}
      </div>
      {checklistVisible && (
        <div className="checklist_Container_Wrapper">
          <Checklist
            checklistData={""}
            handleChecklistToggle={handleChecklistToggle}
          />
        </div>
      )}
      <div className="SelectPassPort_Container">
        <SelectPassPort onSelect={onSelect} />
      </div>
      <div className="Checklist"></div>

      <div className="Checklist_Button_Container">
        <MenuButton text={"Show Checklist"} onClick={handleChecklistToggle} />
      </div>
    </>
  );
}

export default App;
