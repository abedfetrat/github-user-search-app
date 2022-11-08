import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { useState } from "react";
import { useEffect } from "react";

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
