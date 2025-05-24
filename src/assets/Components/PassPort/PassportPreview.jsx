import "./PassportPreview.css";
import {useState} from "react";
import {CharacterImage} from "../CharacterImageGenerator/CharacterImage.comp.jsx";

export function PassportPreview({PassportData, handleSelectPassport}) {
    const [isFrontSideVisible] = useState(true);

    const handleSelect = () => {
        handleSelectPassport(PassportData.Id);
    }

    return (
        <div className="Passport_Preview">
            <button onClick={() => handleSelect(PassportData.Id)}>
                {isFrontSideVisible && (
                    <div className="Preview_Image_Container">
                        <CharacterImage PassportData={PassportData}/>
                    </div>
                )}
            </button>
        </div>
    );
}
