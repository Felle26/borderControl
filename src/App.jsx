import {useEffect, useState} from "react";
import {Checklist} from "./assets/Components/Checklist/checklist.comp.jsx";
import {MenuButton} from "./assets/Components/MenuButton/MenuButton.comp.jsx";
import {FaBars} from "react-icons/fa";

import "./App.css";
import {MainMenu} from "./assets/Components/MainMenu/MainMenu.comp.jsx";
import {PassportList} from "./assets/Components/PassPort/PassportList.jsx";
import {GameStats} from "./assets/Components/GameStats.jsx";
import {getAllPassportSets} from "./assets/PassportService.js";
import { StoryBoard } from "./assets/Components/StoryBoard/StoryBoard.comp.jsx";

function App() {
    const [checklistVisible, setChecklistVisible] = useState(false);
    const [mainMenuVisible, setMainMenuVisible] = useState(false);

    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [faultyGuesses, setFaultyGuesses] = useState(0);

    const handleChecklistToggle = () => {
        setChecklistVisible(!checklistVisible);
    };
    const handleMainMenuToggle = () => {
        setMainMenuVisible(!mainMenuVisible);
    };

    const [passportSetContent, setPassportSetContent] = useState([]);
    const [currentPassportSetIndex, setCurrentPassportSetIndex] = useState(0);
    const [currentPassportSet, setCurrentPassportSet] = useState(null);

    const [currentSelectedPassport, setCurrentSelectedPassport] = useState(null);

    const onSelect = () => {
        const nextIndex = currentPassportSetIndex + 1;
        setCurrentPassportSetIndex(nextIndex);
        setCurrentPassportSet(passportSetContent[nextIndex]);
        setCorrectGuesses(correctGuesses + 1);
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
            <StoryBoard />
            <div className="Main_Menu_Button">
                <MenuButton text={<FaBars />} onClick={handleMainMenuToggle} />
            </div>
            <div className="Main_Container">
                <h1 className="Main_Headline">Border Office</h1>
                <div className="Passport_Container">
                    <PassportList currentPassportSet={currentPassportSet} currentSelectedPassport={currentSelectedPassport} handleSelectPassport={handleSelectPassport} handleSubmit={handleSubmit} />
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
            <GameStats correctCheckedPassport={correctGuesses} faultyCheckedPassport={faultyGuesses} remainingPassports={passportSetContent.length - currentPassportSetIndex} />
        </>
    );
}

export default App;
