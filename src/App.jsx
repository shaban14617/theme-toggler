import { useState } from "react";
import ThemeContext from "./ThemeContext";
import Toggler from "./Toggler";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body{
    background-color: ${(props) => (props.darkMode ? "#334" : "#eef")};
    color: ${(props) => (props.darkMode ? "white" : "black")};
    transition: all ease 0.6s;
  }

`;

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <GlobalStyles darkMode={darkMode} />
        <h4>Dark mode:</h4>
        <Toggler />
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
