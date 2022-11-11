import { ReactComponent as MoonIcon } from "../assets/icon-moon.svg";
import { ReactComponent as SunIcon } from "../assets/icon-sun.svg";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
  color: var(--color-text);
  text-transform: uppercase;
  transition: color 120ms ease;

  &:active,
  &:focus,
  &:hover {
    color: var(--color-theme-toggle-active);
  }

  svg path {
    transition: fill 120ms ease;
  }

  &:active svg path,
  &:focus svg path,
  &:hover svg path {
    fill: var(--color-theme-toggle-active);
  }
`;

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <Wrapper onClick={toggleTheme}>
      <span>{theme === "light" ? "dark" : "light"}</span>
      {theme === "light" ? <MoonIcon /> : <SunIcon />}
    </Wrapper>
  );
}

export default ThemeToggle;
