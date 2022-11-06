import ThemeToggle from "./ThemeToggle";

function Header({ theme, toggleTheme }) {
  return (
    <header className="header">
      <h1 className="logo">devfinder</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme}/>
    </header>
  );
}

export default Header;
