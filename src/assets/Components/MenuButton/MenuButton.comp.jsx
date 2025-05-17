import './menuButton.style.css';

export function MenuButton({ text, onClick }) {
  return (
    <>
    <button className="menu-button" onClick={onClick}>
      {text}
    </button>
    </>
  );
}