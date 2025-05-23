import "./GameStats.css";

export function GameStats({correctCheckedPassport, faultyCheckedPassport, remainingPassports}) {
    return (
        <div className="Game_Stats_Box">
            <p>Passports checked: {correctCheckedPassport + faultyCheckedPassport}</p>
            <p>Passports to be checked: {remainingPassports}</p>
        </div>
    );
}
