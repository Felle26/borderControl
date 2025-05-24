import './menuButton.style.css';

export function MenuButton({ text, onClick }) {
  return (
    <>
    <button className="Menu_Button" onClick={onClick}>
      {text}
    </button>
    </>
  );
}