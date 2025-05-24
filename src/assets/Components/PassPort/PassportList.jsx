import "./PassportList.css";
import {Passport} from "./Passport.jsx";
import {PassportPreviewList} from "./PassportPreviewList.jsx";
import {IoPlayBack} from "react-icons/io5";

export function PassportList({
                                 currentPassportSet,
                                 currentSelectedPassport,
                                 handleSelectPassport,
                                 handleSubmit,
                             }) {
    const getCurrentPassport = () => {
        if (currentPassportSet && currentSelectedPassport) {
            return currentPassportSet.find((p) => p.Id === currentSelectedPassport);
        } else {
            return null;
        }
    };

    return (
        <>
            <div className="Passport_List_Container">
                <div className="Passport_List_Preview_Container">
                    <PassportPreviewList
                        currentPassportSet={currentPassportSet}
                        currentSelectedPassport={currentSelectedPassport}
                        handleSelectPassport={handleSelectPassport}
                    />
                </div>
                {currentSelectedPassport && (
                    <div className="Passport_Spacer">
                        <IoPlayBack className="Passport_Spacer_Arrow"/>
                    </div>
                )}
                {currentPassportSet && currentSelectedPassport && (
                    <div className="Passport_Single_Container">
                        {getCurrentPassport() && (
                            <Passport
                                PassportData={getCurrentPassport()}
                                handleSelectPassport={(id) => handleSelectPassport(id)}
                                handleSubmit={(passportData) => handleSubmit(passportData)}
                                IsSelected={true}
                            />
                        )}
                    </div>
                )}
            </div>
        </>
    );
}
