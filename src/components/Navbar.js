import React, { useContext, useState } from "react";
import { themeContext, themes } from "@/context/themeContext";
import { BsFillCloudMoonFill, BsFillCloudSunFill } from "react-icons/bs";
const Navbar = () => {
  const [lightMode, setLight] = useState(true);

  const { changeTheme } = useContext(themeContext);
  const handleTheme = () => {
    setLight((curr) => !curr);
    changeTheme((lightMode) => (lightMode ? themes.light : themes.dark));
  };
  return (
    <nav>
      <div className="nav_text">
        <h2>Where in the World?</h2>
      </div>
      <div className="nav_icon">
        <button className="nav_button" onClick={handleTheme}>
          {lightMode ? <BsFillCloudSunFill /> : <BsFillCloudMoonFill />}
          {lightMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
