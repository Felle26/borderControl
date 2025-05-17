import './checklist.style.css';

export function Checklist({ checklistData, handleChecklistToggle }) {
  return (
    <div className='checklist-container' onClick={handleChecklistToggle}>
      <h1>Checklist</h1>
      <ul className='checklist'>
        <li className='checklist-item'>
          Passport?
        </li>
        <li>Name</li>
        <li>Surname</li>
          </ul>

    </div>
  )
 }