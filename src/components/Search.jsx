import { useState } from "react";
import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

function Search({ loading, error, onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!loading) {
      onSearch(query);
      setQuery("");
    }
  };

  return (
    <div className={`search ${loading && "loading"}`}>
      <div className="search__bar card">
        <SearchIcon className="search__icon" />
        <input
          className="search__input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search GitHub username..."
        />
        <button className="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {error && <p className="search__error">No results</p>}
    </div>
  );
}

export default Search;
