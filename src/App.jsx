import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";
import Detail from "./components/Detail";
import { useState } from "react";
import { useEffect } from "react";

const user = {
  login: "abedfetrat",
  id: 62446044,
  node_id: "MDQ6VXNlcjYyNDQ2MDQ0",
  avatar_url: "https://avatars.githubusercontent.com/u/62446044?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/abedfetrat",
  html_url: "https://github.com/abedfetrat",
  followers_url: "https://api.github.com/users/abedfetrat/followers",
  following_url:
    "https://api.github.com/users/abedfetrat/following{/other_user}",
  gists_url: "https://api.github.com/users/abedfetrat/gists{/gist_id}",
  starred_url: "https://api.github.com/users/abedfetrat/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/abedfetrat/subscriptions",
  organizations_url: "https://api.github.com/users/abedfetrat/orgs",
  repos_url: "https://api.github.com/users/abedfetrat/repos",
  events_url: "https://api.github.com/users/abedfetrat/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/abedfetrat/received_events",
  type: "User",
  site_admin: false,
  name: "Abed Fetrat",
  company: null,
  blog: "",
  location: "Stockholm",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 20,
  public_gists: 0,
  followers: 0,
  following: 2,
  created_at: "2020-03-20T19:54:55Z",
  updated_at: "2022-09-03T10:56:18Z",
};

function App() {
  const [theme, setTheme] = useLocalStorageState("theme", "light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <div>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main>
          <Search />
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

export default App;
