import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  const darkMode = true;
  return (
    <div className={`App ${darkMode && "dark"}`}>
      <div>
        <Header darkMode={darkMode} />
        <main>
          <Search />
        </main>
      </div>
    </div>
  );
}

export default App;
