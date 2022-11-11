import { useState, useEffect } from "react";
import useLocalStorageState from "./hooks/useLocalStorageState";
import useFetch from "./hooks/useFetch";
import Header from "./components/Header";
import Search from "./components/Search";
import Detail from "./components/Detail";
import "./App.css";

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
    <div className="App">
      <div>
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
