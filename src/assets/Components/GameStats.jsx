import "./GameStats.css";
import { GiPoliceOfficerHead } from "react-icons/gi";

export function GameStats({
  correctCheckedPassport,
  faultyCheckedPassport,
  remainingPassports,
}) {
  return (
    <div className="Game_Stats_Box">
      <div className="Stats_Icon">
        <GiPoliceOfficerHead className="Officer_Icon" />
      </div>
      <div className="Stats_Text">
        <p>
          Passports checked: {correctCheckedPassport + faultyCheckedPassport}
        </p>
        <p>Passports to be checked: {remainingPassports}</p>
      </div>
    </div>
  );
}
