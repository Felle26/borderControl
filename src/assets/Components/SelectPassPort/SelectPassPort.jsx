import "./SelectPassPort.css";
import { FaArrowUp } from "react-icons/fa";

export function SelectPassPort({ onSelect }) {
  return (
    <div className="decider">
      <div className="decider-button-container">
        <button
          className="decider-button select"
          onClick={onSelect}
          aria-label="Select"
        >
          <FaArrowUp className="decider-icon" />
        </button>
        <span className="decider-label">Select matching PassPort</span>
      </div>
    </div>
  );
}
