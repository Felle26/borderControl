import './SplashScreen.style.css';

export function SplashScreen({restartGame}) {
  return (
    <div className="Splash_Screen">
      <h1 className="Game_Title">Border Control</h1>
      <h1>Game Credits</h1>
      <div className="Splash_Section">
        <h2 className="Splash_H2">Developers</h2>
        <p className="Splash_paragraph">Sebastian Felsberg</p>
        <p className="Splash_paragraph">Marcel Lamm</p>
      </div>
      <button className="SplashButton" onClick={restartGame}>
        Start the Game!
      </button>
      <div className="Credit_Section">
        <h2 className="Splash_H2">Special Thanks</h2>
        <p className="Splash_paragraph">To our families for their support.</p>
        <p className="Splash_paragraph">
          To the open-source community for invaluable resources.
        </p>

        <p className="Splash_paragraph">
          This game was created as part of the&nbsp;
          <br />
          <a href="https://reactjam.com"> ReactJam 2025</a>.
        </p>
      </div>
      <ul>
        <li>
          <a href="https://freesound.org/s/774754/">
            Card Slap1 by mmarin2358 -- -- License: Creative Commons 0
          </a>
        </li>
        <li>
          <a href="incompetech.com">
            "Mesmerizing Galaxy" Kevin MacLeod (incompetech.com) Licensed under
            Creative Commons: By Attribution 4.0 License
            http://creativecommons.org/licenses/by/4.0/
          </a>
        </li>
      </ul>
    </div>
  );
}