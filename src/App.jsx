import {useState} from "react";
import {Checklist} from "./assets/Components/Checklist/checklist.comp.jsx";
import {MenuButton} from "./assets/Components/MenuButton/MenuButton.comp.jsx";
import {FaBars} from "react-icons/fa";

import "./App.css";
import {MainMenu} from "./assets/Components/MainMenu/MainMenu.comp.jsx";
import {PassportList} from "./assets/Components/PassPort/PassportList.jsx";
import { StoryBoard } from "./assets/Components/StoryBoard/StoryBoard.comp.jsx";

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
            <StoryBoard />
            <div className="Main_Menu_Button">
                <MenuButton text={<FaBars />} onClick={handleMainMenuToggle} />
            </div>
            <div className="Main_Container">
                <h1 className="Main_Headline">Border Office</h1>
                <div className="Passport_Container">
                    <PassportList/>
                </div>
                {checklistVisible && (
                    <div className="Checklist_Container_Wrapper">
                        <Checklist
                            checklistData={""}
                            handleChecklistToggle={handleChecklistToggle}
                        />
                    </div>
                )}
            </div>
            <div className="Checklist"></div>
            <div className="Checklist_Button_Container">
                <MenuButton
                    text={checklistVisible ? "Hide Checklist" : "Show Checklist"}
                    onClick={handleChecklistToggle}
                />
            </div>
            {mainMenuVisible && (
                <div className="Main_Menu_Container">
                    <MainMenu CloseMenuHandler={handleMainMenuToggle} />
                </div>
            )}
        </>
    );
}

export default App;
