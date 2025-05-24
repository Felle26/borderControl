import "./Passport.css";
import "./PassportBackside.css";

export function PassportBackside({PassportData}) {
    return (
        <>
            <div className="Passport_Back_Body">
                <div className="Passport_Back_Footer_Details">
                    <p>Eye color:</p>
                    <p>{PassportData.EyeColor}</p>
                </div>
                <div className="Passport_Back_Footer_Details">
                    <p>Hair color:</p>
                    <p>{PassportData.HairColor}</p>
                </div>

                <div className="Passport_Back_Footer_Details">
                    <p>Height:</p>
                    <p>{PassportData.Height} cm</p>
                </div>

                <div className="Passport_Back_Footer_Details">
                    <p>Glasses:</p>
                    <p>{PassportData.Glasses ? 'yes' : 'no'}</p>
                </div>
            </div>
            <div className="Passport_Back_Footer">
                <div className="Passport_Back_Footer_Details">
                    <p>{PassportData.BacksideId}</p>
                </div>
            </div>
            <div className="Passport_Back_Countryflag">
                <img src={PassportData.CountryFlag} alt="Country Flag"/>
            </div>
        </>
    );
}
