import "./PassportPreviewList.css";
import {PassportPreview} from "./PassportPreview.jsx";

export function PassportPreviewList({
                                        currentPassportSet,
                                        currentSelectedPassport,
                                        handleSelectPassport,
                                    }) {
    return (
        <>
            <h1>Available passports:</h1>
            <div className="Passport_List_Preview">
                {currentPassportSet &&
                    currentPassportSet.map((passport, index) => (
                        <div
                            key={passport.Id}
                            className={
                                currentSelectedPassport === passport.Id
                                    ? "Passport_Single_Preview_Container Selected_Passport"
                                    : "Passport_Single_Preview_Container"
                            }
                        >
                            <PassportPreview
                                PassportData={passport}
                                handleSelectPassport={(id) => handleSelectPassport(id)}
                                IsSelected={currentSelectedPassport === passport.Id}
                            />
                        </div>
                    ))}
            </div>
        </>
    );
}
