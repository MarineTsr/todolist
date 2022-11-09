import { useContext } from "react";
import themeContext from "./../data/theme";

function ThemeSwitcher({ switchHandler }) {
  const theme = useContext(themeContext);
  return (
    <div className="form-check form-switch">
      <input
        className="form-check-input"
        type="checkbox"
        role="switch"
        id="themeSwitcher"
        onChange={switchHandler}
      />
      <label className="form-check-label" htmlFor="themeSwitcher">
        Thème {theme === "light" ? "clair" : "sombre"}
      </label>
    </div>
  );
}

export default ThemeSwitcher;
