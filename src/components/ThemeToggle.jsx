import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      className="group flex items-center gap-x-4 uppercase text-san-marino transition-colors hocus:text-hei-se-black dark:text-white dark:hocus:text-san-marino"
      onClick={toggleTheme}
    >
      <span className="leading-none font-bold">
        {theme === "light" ? "dark" : "light"}
      </span>
      {theme === "light" ? (
        <MoonIcon className="[&>path]:transition-all group-hocus:[&>path]:fill-hei-se-black" />
      ) : (
        <SunIcon className="[&>path]:transition-all group-hocus:[&>path]:fill-san-marino" />
      )}
    </button>
  );
}

export default ThemeToggle;
