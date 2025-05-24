import {useEffect, useState} from "react";
import {FaBars} from "react-icons/fa";

import "./App.css";
import {PassportList} from "./assets/Components/PassPort/PassportList.jsx";
import {GameStats} from "./assets/Components/GameStats.jsx";
import {getAllPassportSets} from "./assets/PassportService.js";
import { StoryBoard } from "./assets/Components/StoryBoard/StoryBoard.comp.jsx";

function App() {
    const [correctGuesses, setCorrectGuesses] = useState(0);
    const [faultyGuesses] = useState(0);

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
            <div className="Main_Container">
                <h1 className="Main_Headline">Border Office</h1>
                <div className="Passport_Container">
                    {currentPassportSet && <PassportList currentPassportSet={currentPassportSet.passports} currentSelectedPassport={currentSelectedPassport} handleSelectPassport={handleSelectPassport} handleSubmit={handleSubmit} />}
                </div>
                {currentPassportSet && <StoryBoard StoryBoardData={currentPassportSet.story} />}
            </div>
            <GameStats correctCheckedPassport={correctGuesses} faultyCheckedPassport={faultyGuesses} remainingPassports={passportSetContent.length - currentPassportSetIndex} />
        </>
    );
}

export default App;
