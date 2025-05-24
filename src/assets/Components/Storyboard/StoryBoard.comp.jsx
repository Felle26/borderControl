import './StoryBoard.style.css';

export function StoryBoard({StoryBoardData}) {
  return (
    <div className="Story_Board_container">
      <h2>Find the Matching Passport</h2>
      <p>Hello Officer, find the Right Passport</p>
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