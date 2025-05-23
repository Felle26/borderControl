import "./Passport.css";
import { PassportFrontside } from "./PassportFrontside.jsx";
import { PassportBackside } from "./PassportBackside.jsx";
import { useState } from "react";
import { MdFlipCameraAndroid } from "react-icons/md";

export function Passport({ PassportData, isHighlighted = true }) {
  const [isFrontSideVisible, setIsFrontSideVisible] = useState(true);

  const handleFlip = () => {
    setIsFrontSideVisible(!isFrontSideVisible);
  };

  return (
    <>
      {/*<div*/}
      {/*    className={`passport_highlight_wrapper ${*/}
      {/*        isHighlighted ? "highlighted" : ""*/}
      {/*    }`}*/}
      {/*>*/}
      <button>
        <div className="Passport">
          {isFrontSideVisible && (
            <PassportFrontside PassportData={PassportData} />
          )}
          {!isFrontSideVisible && (
            <PassportBackside PassportData={PassportData} />
          )}
        </div>
      </button>
      {/*</div>*/}
      {/*<button*/}
      {/*    // onClick={() => handleSelectPassport(index)}*/}
      {/*    // aria-label={`Select passport ${index + 1}`}*/}
      {/*/>*/}
      <button
        className="Flip_Button"
        onClick={handleFlip}
        aria-label={isFrontSideVisible ? "Show back side" : "Show front side"}
      >
        <MdFlipCameraAndroid
          className={`Flip_Icon ${!isFrontSideVisible ? "Flipped" : ""}`}
        />
      </button>
    </>
  );
}
