import Header from "./components/Header";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { useState } from "react";
import { useEffect } from "react";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: min(calc(100% - 48px), 573px);
  justify-content: center;
  padding-block: 32px;
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  font-family: "Space Mono", monospace;
  font-size: 13px;
  background-color: var(--color-canvas);
  color: var(--color-text);

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  @media screen and (min-width: 768px) {
    padding-block: 140px;
  }

  @media screen and (min-width: 1110px) {
    grid-template-columns: min(100%, 730px);
    padding-block: 144px;
  }

  ${({ $theme }) =>
    $theme === "dark" &&
    css`
      --color-canvas: var(--hei-se-black);
      --color-surface: var(--fainting-light);
      --color-text: var(--white);
      --color-text-secondary: var(--white);
      --color-theme-toggle-active: var(--san-marino);
    `}
`;

function App() {
  const [theme, setTheme] = useLocalStorageState("theme", "light");
  const [searchQuery, setSearchQuery] = useState(null);
  const [user, loading, error] = useFetch(
    searchQuery ? `https://api.github.com/users/${searchQuery}` : null
  );

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const handleSearch = (query) => {
    if (query && query.length > 0) {
      setSearchQuery(query);
    }
  };

  return (
    <Wrapper $theme={theme}>
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Search
            loading={loading}
            error={error}
            onSearch={handleSearch}
            theme={theme}
          />
          <Detail user={user} theme={theme} />
        </main>
      </div>
    </Wrapper>
  );
}

function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    const persistedValue = localStorage.getItem(key);
    return persistedValue !== null ? persistedValue : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;
    setError(null);
    setLoading(true);
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) throw new Error(response.status.toString());
        return response.json();
      })
      .then((data) => {
        setLoading(false);
        setData(data);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
        setError(error.message);
      });
  }, [endpoint]);

  return [data, loading, error];
}

export default App;
