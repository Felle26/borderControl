import "./Passport.css";
import "./PassportBackside.css";

export function PassportBackside({ PassportData }) {
  return (
    <>
      <div className="passportback">
        <div className="passportback_body">
          <div className="passportback_details">
            <div className="passportback_body_details">
              <p>Eye color:</p>
              <p>{PassportData.EyeColor}</p>
            </div>
            <div className="passportback_body_details">
              <p>Hair color::</p>
              <p>{PassportData.HairColor}</p>
            </div>

            <div className="passportback_body_details">
              <p>Height:</p>
              <p>{PassportData.Height} cm</p>
            </div>
          </div>
        </div>
        <div className="passportback_footer">
          <div className="passportback_footer_details">
            <p>{PassportData.BacksideId}</p>
          </div>
        </div>
      </div>
    </>
  );
}
