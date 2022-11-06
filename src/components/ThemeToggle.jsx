import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme}>
      <span className="theme-toggle__text">
        {theme === "light" ? "dark" : "light"}
      </span>
      {theme === "light" ? (
        <MoonIcon className="theme-toggle__icon" />
      ) : (
        <SunIcon className="theme-toggle__icon" />
      )}
    </button>
  );
}

export default ThemeToggle;
