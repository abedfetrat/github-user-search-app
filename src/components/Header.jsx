import ThemeToggle from "./ThemeToggle";

function Header({ darkMode }) {
  return (
    <header className="header">
      <h1 className="logo">devfinder</h1>
      <ThemeToggle darkMode={darkMode} />
    </header>
  );
}

export default Header;
