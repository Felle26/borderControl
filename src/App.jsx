import { useEffect, useState } from "react";
import { Passport } from "./assets/Components/PassPort/Passport.jsx";
import { Checklist } from "./assets/Components/Checklist/checklist.comp.jsx";
import { MenuButton } from "./assets/Components/MenuButton/MenuButton.comp.jsx";
import { FaBars } from "react-icons/fa";

import "./App.css";
import { getAllPassportSets } from "./assets/PassportService.js";
import { SelectPassPort } from "./assets/Components/SelectPassPort/SelectPassPort.jsx";
import { MainMenu } from "./assets/Components/MainMenu/MainMenu.comp.jsx";
import {PassportList} from "./assets/Components/PassPort/PassportList.jsx";

function App() {
  const [checklistVisible, setChecklistVisible] = useState(false);
  const [mainMenuVisible, setMainMenuVisible] = useState(false);

  const handleChecklistToggle = () => {
    setChecklistVisible(!checklistVisible);
  };
  const handleMainMenuToggle = () => {
    setMainMenuVisible(!mainMenuVisible);
  };

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
          <PassportList />
      </div>
      {checklistVisible && (
        <div className="checklist_Container_Wrapper">
          <Checklist
            checklistData={""}
            handleChecklistToggle={handleChecklistToggle}
          />
        </div>
      )}
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
