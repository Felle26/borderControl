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
      <div
        className={`passport_highlight_wrapper ${
          isHighlighted ? "highlighted" : ""
        }`}
      >
        <div className="passport_container">
          <div className={`passport ${isFrontSideVisible ? "front" : "back"}`}>
            {isFrontSideVisible && (
              <PassportFrontside PassportData={PassportData} />
            )}
            {!isFrontSideVisible && (
              <PassportBackside PassportData={PassportData} />
            )}
          </div>
        </div>
        <button
          className="flip_button"
          onClick={handleFlip}
          aria-label={isFrontSideVisible ? "Show back side" : "Show front side"}
        >
          <MdFlipCameraAndroid
            className={`flip_icon ${!isFrontSideVisible ? "flipped" : ""}`}
          />
        </button>
      </div>
    </>
  );
}
