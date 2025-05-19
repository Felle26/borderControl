import "./MainMenu.style.css";
import { MenuButton } from "../MenuButton/MenuButton.comp.jsx";
export function MainMenu({CloseMenuHandler}) {
  return (
    <>
      <div className="Main_Menu">
        <h1>Main Menu</h1>
        <div className="Main_Menu_Buttons">
          <MenuButton text={"New Game"} onClick={() => {}} />
          <MenuButton text={"Load Game"} onClick={() => {}} />
          <MenuButton text={"Settings"} onClick={() => {}} />
          <MenuButton text={"Exit"} onClick={() => {}} />
        </div>
        <div className=""></div>
      </div>
      <div className="BG_Blur" onClick={CloseMenuHandler}></div>
    </>
  );
}
