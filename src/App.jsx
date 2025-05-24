import { useEffect, useState } from "react";

import "./App.css";
import { PassportList } from "./assets/Components/PassPort/PassportList.jsx";
import { GameStats } from "./assets/Components/GameStats.jsx";
import { getAllPassportSets } from "./assets/PassportService.js";
import { StoryBoard } from "./assets/Components/StoryBoard/StoryBoard.comp.jsx";
import { GameEndscreen } from "./assets/Components/GameEndscreen.jsx";

function App() {
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [faultyGuesses, setFaultyGuesses] = useState(0);

  const [passportSetContent, setPassportSetContent] = useState([]);
  const [currentPassportSetIndex, setCurrentPassportSetIndex] = useState(0);
  const [currentPassportSet, setCurrentPassportSet] = useState(null);

  const [currentSelectedPassport, setCurrentSelectedPassport] = useState(null);
  const [isGameEndScreen, setIsGameEndScreen] = useState(false);
  const [timerStartedOn, setTimerStartedOn] = useState(0);

  const onSelect = () => {
    const nextIndex = currentPassportSetIndex + 1;
    setCurrentPassportSetIndex(nextIndex);
    setCurrentPassportSet(passportSetContent[nextIndex]);

    if (nextIndex === passportSetContent.length) {
      setIsGameEndScreen(true);
    }
  };

  const handleSubmit = (currentPassport) => {
    if (currentPassport.Id === currentPassportSet.story.matchingPassport) {
      setCorrectGuesses(correctGuesses + 1);
    } else {
      setFaultyGuesses(faultyGuesses + 1);
    }

    onSelect();
  };

  const handleSelectPassport = (currentPassport) => {
    console.log("handleSelectPassport: " + currentPassport);
    if (currentPassport === currentSelectedPassport) {
      setCurrentSelectedPassport(null);
      return;
    }

    setCurrentSelectedPassport(currentPassport);
    // Handle the selection of a passport
    console.log("Selected Passport ID: ", currentPassport);
  };

  useEffect(() => {
    const passportSets = getAllPassportSets();
    setPassportSetContent(passportSets);
    setCurrentPassportSet(passportSets[currentPassportSetIndex]);
  }, [currentPassportSetIndex]);

  const restartGame = () => {
    setIsGameEndScreen(false);
    setCorrectGuesses(0);
    setFaultyGuesses(0);
    setCurrentPassportSetIndex(0);
    setCurrentPassportSet(passportSetContent[0]);
    setTimerStartedOn(0);
  };

  // Add global click handler
  useEffect(() => {
    const handleGlobalClick = () => {
      if (timerStartedOn <= 0) {
        setTimerStartedOn(Math.floor(Date.now() / 1000));
      }
    };

    // Add the event listener
    document.addEventListener("click", handleGlobalClick);

    // Cleanup function to remove the event listener
    return () => {
      document.removeEventListener("click", handleGlobalClick);
    };
  }, [timerStartedOn]); // Add timerStartedOn to dependencies to re-run effect when it changes

  return (
    <>
      <div className="Main_Container">
        <h1 className="Main_Headline">Border Office</h1>
        {isGameEndScreen && (
          <GameEndscreen
            correctGuesses={correctGuesses}
            faultyGuesses={faultyGuesses}
            timePlayed={
              timerStartedOn
                ? Math.floor(Date.now() / 1000) - timerStartedOn
                : 0
            }
            onPlayAgain={restartGame}
          />
        )}
        {!isGameEndScreen && (
          <>
            <div className="Passport_Container">
              {currentPassportSet && (
                <PassportList
                  currentPassportSet={currentPassportSet.passports}
                  currentSelectedPassport={currentSelectedPassport}
                  handleSelectPassport={handleSelectPassport}
                  handleSubmit={handleSubmit}
                />
              )}
            </div>
            {currentPassportSet && (
              <StoryBoard StoryBoardData={currentPassportSet.story} />
            )}
          </>
        )}
      </div>
      <GameStats
        correctCheckedPassport={correctGuesses}
        faultyCheckedPassport={faultyGuesses}
        remainingPassports={passportSetContent.length - currentPassportSetIndex}
      />
    </>
  );
}

export default App;
