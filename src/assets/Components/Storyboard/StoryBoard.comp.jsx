import './StoryBoard.style.css';
import {useState} from "react";

export function StoryBoard() {

  const [lined, setLined] = useState(false);
  const StoryBoardData = {
    title: 'Find the Matching Passport',
    description: 'Hello Officer, find the Right Passport',
    steps: [
      'Check the Date of Birth',
      'Check the Expiry Date',
      'Check the Nationality',
      'The Person hast Brown Hair',
      'The Person is older than 25',
      'The Person is taller than 170cm',
      'The Person has Blue Eyes',
    ]
  }
  return (
    <div className="Story_Board_container">
      <h2>{StoryBoardData.title}</h2>
      <p>{StoryBoardData.description}</p>
      <ul>
        {StoryBoardData.steps.map((step, index) => (
          <li key={index}>
            
            {step}
          </li>
        ))}
      </ul>
    </div>
  );
}