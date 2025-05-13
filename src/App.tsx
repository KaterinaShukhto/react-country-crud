import React, { useState } from "react";
import Header from "./components/UI/Header/Header";
import { Outlet } from "react-router-dom";
import ThemeContext from "./Context/ThemeContext";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>('light')

  return (
    <ThemeContext.Provider value={theme}>
      <Header setTheme={setTheme}/>
      <div className={[theme, 'themeBackground'].join(" ")}>
        <Outlet/>
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
