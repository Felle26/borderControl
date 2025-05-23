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

  const [currentSelectedPassport, setCurrentSelectedPassport] = useState(null);

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

  const handleSelectPassport = (currentPassport) => {
    if (currentPassport === currentSelectedPassport) {
      setCurrentSelectedPassport(null);
      return;
    }

    setCurrentSelectedPassport(currentPassport);
    // Handle the selection of a passport
    console.log('Selected Passport ID: ', currentSelectedPassport);
  }

  useEffect(() => { console.log( currentSelectedPassport); }, [currentSelectedPassport]);

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
            <div
              className={
                currentSelectedPassport === 1
                  ? "Passport_Wrapper selected_Passport"
                  : "Passport_Wrapper"
              }
            >
              <button
                className="Passport_Select_button"
                onClick={() => {
                  handleSelectPassport(1);
                }}
              ></button>
              <Passport PassportData={currentPassportSet[0]} />
            </div>
            <div
              className={
                currentSelectedPassport === 2
                  ? "Passport_Wrapper selected_Passport"
                  : "Passport_Wrapper"
              }
            >
              <button
                className="Passport_Select_button"
                onClick={() => {
                  handleSelectPassport(2);
                }}
              ></button>
              <Passport PassportData={currentPassportSet[1]} />
            </div>
            <div
              className={
                currentSelectedPassport === 3
                  ? "Passport_Wrapper selected_Passport"
                  : "Passport_Wrapper"
              }
            >
              <button
                className="Passport_Select_button"
                onClick={() => {
                  handleSelectPassport(3);
                }}
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
        <MenuButton
          text={checklistVisible ? "Hide Checklist" : "Show Checklist"}
          onClick={handleChecklistToggle}
        />
      </div>
    </>
  );
}

export default App;
