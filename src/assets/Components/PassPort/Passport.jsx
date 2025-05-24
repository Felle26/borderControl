import "./Passport.css";
import {PassportFrontside} from "./PassportFrontside.jsx";
import {PassportBackside} from "./PassportBackside.jsx";
import {useState} from "react";
import {MdFlipCameraAndroid} from "react-icons/md";
import {FaCheckCircle} from "react-icons/fa";

export function Passport({PassportData, handleSelectPassport, handleSubmit, IsSelected}) {
    const [isFrontSideVisible, setIsFrontSideVisible] = useState(true);

    const handleFlip = () => {
        setIsFrontSideVisible(!isFrontSideVisible);
    };

    const handleSelect = () => {
        handleSelectPassport(PassportData.Id);
    }

    return (
        <>
            <button
                className={`Submit_Button ${!IsSelected ? "Invisible" : ""}`}
                onClick={() => handleSubmit(PassportData)}
                aria-label="Select passport for choice"
            >
                <FaCheckCircle
                    className={`Flip_Icon ${!isFrontSideVisible ? "Flipped" : ""}`}
                />
            </button>
            <button onClick={() => handleSelect(PassportData.Id)}>
                <div className="Passport">
                    {isFrontSideVisible && (
                        <PassportFrontside PassportData={PassportData}/>
                    )}
                    {!isFrontSideVisible && (
                        <PassportBackside PassportData={PassportData}/>
                    )}
                </div>
            </button>
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
