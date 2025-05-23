import "./PassportList.css";
import { Passport } from "./Passport.jsx";

export function PassportList({currentPassportSet, currentSelectedPassport, handleSelectPassport, handleSubmit}) {

  return (
    <>
      <div className="Passport_List_Container">
        {currentPassportSet &&
          currentPassportSet.map((passport, index) => (
            <div
              key={passport.Id}
              className={
                currentSelectedPassport === passport.Id
                  ? "Passport_Single_Container Selected_Passport"
                  : "Passport_Single_Container"
              }
            >
              <Passport
                PassportData={passport}
                handleSelectPassport={(id) => handleSelectPassport(id)}
                handleSubmit={(passportData) => handleSubmit(passportData)}
                IsSelected={currentSelectedPassport === passport.Id}
              />
            </div>
          ))}
      </div>
    </>
  );
}
