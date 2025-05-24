import "./PassportFrontside.css";
import{ CharacterImage} from "../CharacterImageGenerator/CharacterImage.comp.jsx";

export function PassportFrontside({PassportData}) {
    return (
        <>
            <div className="Passport_Front_Header">
                <div className="Passport_Details_Header">
                    <h2>{PassportData.Country}</h2>
                    <h2>{PassportData.PassportType}</h2>
                </div>

                <h2>{PassportData.PassportNumber}</h2>
            </div>

            <div className="Passport_Body">
                <div className="Image_Container">
                    {/* <img src={PassportData.Image}/> */}
                    <CharacterImage PassportData={PassportData} />
                </div>
                <div className="Passport_Details">
                    <div className="Passport_Body_Details">
                        <p>Name:</p>
                        <p>{PassportData.Name}</p>
                    </div>
                    <div className="Passport_Body_Details">
                        <p>Surname:</p>
                        <p>{PassportData.Surname}</p>
                    </div>

                    <div className="Passport_Body_Details">
                        <p>Date of Birth:</p>
                        <p>{PassportData.DateOfBirth}</p>
                    </div>
                </div>
            </div>
            <div className="Passport_Footer">
                <div className="Passport_Footer_Details">
                    <p>Issued By:</p>
                    <p>{PassportData.IssuedBy}</p>
                </div>
                <div className="Passport_Footer_Details">
                    <p>Issue Date:</p>
                    <p>{PassportData.IssueDate}</p>
                </div>
                <div className="Passport_Footer_Details">
                    <p>Expiry Date:</p>
                    <p>{PassportData.ExpiryDate}</p>
                </div>
            </div>
        </>
    );
}
