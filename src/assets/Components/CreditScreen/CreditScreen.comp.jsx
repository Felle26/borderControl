import './CreditScreen.style.css';

export function CreditScreen() {
  return (
    <div className="Credit_Screen">
      <h1>Game Credits</h1>
      <div className="Credit_Section">
        <h2>Developers</h2>
        <p>Sebastian Felsberg</p>
        <p>Marcel Lamm</p>
      </div>
      <div className="Credit_Section">
        <h2>Special Thanks</h2>
        <p>To our families and friends for their support.</p>
        <p>To the open-source community for invaluable resources.</p>
        <h2></h2>
        <p>
          Card Slap1 by mmarin2358 -- https://freesound.org/s/774754/ --
          License: Creative Commons 0
        </p>
      </div>
    </div>
  );
}