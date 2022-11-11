import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";
import styled, { css, keyframes } from "styled-components";
import Card from "./Card";

const shoot = keyframes`
  from {
    left: -200px;
  }
  to {
    left: 100%;
  }
`;

const Wrapper = styled.div`
  position: relative;
  margin-top: 36px;

  svg {
    display: block;
    min-width: 25px;
    margin-left: 9px;
  }

  p {
    position: absolute;
    bottom: calc(100% + 7px);
    left: 50%;
    transform: translateX(-50%);
    font-size: 13px;
    color: var(--color-error);
  }

  @media screen and (min-width: 768px) {
    column-gap: 24px;
    padding: 10px;

    svg {
      margin-left: 24px;
    }
  }

  @media screen and (min-width: 1110px) {
    p {
      position: absolute;
      top: 50%;
      bottom: unset;
      left: unset;
      right: 148px;
      transform: translateY(-50%);
      font-size: 15px;
    }
  }
`;

const Bar = styled(Card)`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 7px;
  padding: 7px;
  overflow: hidden;

  ${({ $loading }) =>
    $loading &&
    css`
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        display: block;
        width: 200px;
        height: 3px;
        background: rgb(0, 121, 255);
        background: linear-gradient(
          90deg,
          rgba(0, 121, 255, 0) 0%,
          rgba(0, 121, 255, 1) 50%,
          rgba(0, 121, 255, 0) 100%
        );
        animation: ${shoot} 1.2s ease-in infinite;
      }
    `}
`;

const Input = styled.input`
  flex: 1;
  min-width: 0px;
  align-self: stretch;
  background: none;
  border: none;
  outline: none;
  caret-color: var(--color-primary);

  &::placeholder {
    color: inherit;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

const Button = styled.button`
  min-width: 84px;
  padding: 12px 16px;
  border-radius: 10px;
  background-color: var(--color-primary);
  color: var(--white);
  font-size: 14px;
  transition: background-color 120ms ease;

  &:active,
  &:focus,
  &:hover {
    background-color: var(--color-primary-active);
  }

  @media screen and (min-width: 768px) {
    min-width: 106px;
    padding-inline: 24px;
    font-size: 16px;
  }
`;

function Search({ loading, error, onSearch, theme }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!loading) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <Wrapper>
      <Bar $loading={loading} $theme={theme}>
        <SearchIcon />
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search GitHub username..."
        />
        <Button onClick={handleSearch}>Search</Button>
      </Bar>
      {error && <p>No results</p>}
    </Wrapper>
  );
}

export default Search;
