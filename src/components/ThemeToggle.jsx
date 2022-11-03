import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";
function ThemeToggle({ darkMode }) {
  return (
    <button className="theme-toggle">
      <span className="theme-toggle__text">{darkMode ? "light" : "dark"}</span>
      {darkMode ? (
        <SunIcon className="theme-toggle__icon" />
      ) : (
        <MoonIcon className="theme-toggle__icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
