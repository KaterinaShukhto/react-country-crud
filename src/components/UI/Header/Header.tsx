import React, { useContext } from "react";
import Menu from "../Menu/Menu";
import ThemeContext from "../../../Context/ThemeContext";

interface IProps{
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

const Header: React.FC<IProps> = ({setTheme}) => {
  const theme = useContext(ThemeContext)

  return (
    <div>
      <Menu/>
      <button 
        onClick={()=>{setTheme(theme === 'light' ? 'dark' : 'light')
          console.log(theme)}}
        style={{marginBottom: '50px'}}>
          Chenge theme
        </button>
    </div>
  );
};

export default Header;
