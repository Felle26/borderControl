import "./Passport.css";
import {PassportFrontside} from "./PassportFrontside.jsx";
import {PassportBackside} from "./PassportBackside.jsx";
import {useEffect, useState} from "react";
import {MdFlipCameraAndroid} from "react-icons/md";
import {FaCheckCircle} from "react-icons/fa";

export function Passport({PassportData, handleSubmit}) {
    const [isFrontSideVisible, setIsFrontSideVisible] = useState(true);

    const handleFlip = () => {
        setIsFrontSideVisible(!isFrontSideVisible);
    };

    useEffect(() => {
        console.log("current passport data: " + PassportData)
    }, [PassportData]);

    return (
        <>
            <button
                className="Submit_Button"
                onClick={() => handleSubmit(PassportData)}
                aria-label="Select passport for choice"
            >
                <FaCheckCircle
                    className={`Flip_Icon ${!isFrontSideVisible ? "Flipped" : ""}`}
                />
            </button>
            <div className="Passport">
                {isFrontSideVisible && (
                    <PassportFrontside PassportData={PassportData}/>
                )}
                {!isFrontSideVisible && (
                    <PassportBackside PassportData={PassportData}/>
                )}
            </div>
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
