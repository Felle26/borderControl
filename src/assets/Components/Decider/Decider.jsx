import "./Decider.css";
import { FaCheck, FaTimes } from "react-icons/fa";

export function Decider({ onApprove, onDeny }) {
  return (
    <div className="decider">
      <div className="decider-button-container">
        <button
          className="decider-button approve"
          onClick={onApprove}
          aria-label="Approve"
        >
          <FaCheck className="decider-icon" />
        </button>
        <span className="decider-label">Approve</span>
      </div>
      <div className="decider-button-container">
        <button
          className="decider-button deny"
          onClick={onDeny}
          aria-label="Deny"
        >
          <FaTimes className="decider-icon" />
        </button>
        <span className="decider-label">Deny</span>
      </div>
    </div>
  );
}
