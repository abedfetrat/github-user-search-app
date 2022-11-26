import ThemeToggle from "./ThemeToggle";

function Header({ theme, toggleTheme }) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-[26px] font-bold text-anchors-aweigh dark:text-white">
        devfinder
      </h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </header>
  );
}

export default Header;
