import "./Passport.css";

export function Passport({ PassportData }) {

  return (
    <>
      <div className="passport">
        <div className="passport_header">
          <div className="passport_details_header">
            <h2>{PassportData.Country}</h2>
            <h2>{PassportData.PassportType}</h2>
          </div>

          <h2>{PassportData.PassportNumber}</h2>
        </div>

        <div className="passport_body">
          <div className="image_container">
            <img src={PassportData.Image} />
          </div>
          <div className="passport_details">
            <div className="passport_body_details">
              <p>Name:</p>
              <p>{PassportData.Name}</p>
            </div>
            <div className="passport_body_details">
              <p>Surname:</p>
              <p>{PassportData.Surname}</p>
            </div>

            <div className="passport_body_details">
              <p>Date of Birth:</p>
              <p>{PassportData.DateOfBirth}</p>
            </div>
          </div>
        </div>
        <div className="passport_footer">
          <div className="passport_footer_details">
            <p>Issued By:</p>
            <p>{PassportData.IssuedBy}</p>
          </div>
          <div className="passport_footer_details">
            <p>Issue Date:</p>
            <p>{PassportData.IssueDate}</p>
          </div>
          <div className="passport_footer_details">
            <p>Expiry Date:</p>
            <p>{PassportData.ExpiryDate}</p>
          </div>
        </div>
      </div>
    </>
  );
}
