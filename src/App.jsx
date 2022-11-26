import { useState, useEffect } from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import Search from "./components/Search";
import Detail from "./components/Detail";

function App() {
  const [theme, setTheme] = useLocalStorageState("theme", "light");
  const [searchQuery, setSearchQuery] = useState(null);
  const [user, loading, error] = useFetch(
    searchQuery ? `https://api.github.com/users/${searchQuery}` : null
  );

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  const handleSearch = (query) => {
    if (query && query.length > 0) {
      setSearchQuery(query);
    }
  };

  return (
    <div className="no-scrollbar h-[100vh] w-[100vw] overflow-x-hidden overflow-y-scroll bg-ghost-white pt-8 pb-8 pl-6 pr-6 text-[13px] text-san-marino dark:bg-hei-se-black dark:text-white md:pt-36 md:pb-36">
      <div className="mx-auto w-full max-w-[573px] lg:max-w-[730px]">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Search loading={loading} error={error} onSearch={handleSearch} />
          <Detail user={user} />
        </main>
      </div>
    </div>
  );
}

export default App;
