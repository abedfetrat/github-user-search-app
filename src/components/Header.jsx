import ThemeToggle from "./ThemeToggle";
import styled from "styled-components";

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 26px;
    font-weight: 700;
    color: var(--color-text-secondary);
  }
`;

function Header({ theme, toggleTheme }) {
  return (
    <Wrapper>
      <h1>devfinder</h1>
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
    </Wrapper>
  );
}

export default Header;
