import { ReactComponent as SearchIcon } from "../assets/icon-search.svg";

function Search({ onSearch }) {
  return (
    <div className="search card">
      <SearchIcon className="search__icon" />
      <input
        className="search__input"
        placeholder="Search GitHub username..."
      />
      <p className="search__error">No results</p>
      <button className="button">Search</button>
    </div>
  );
}

export default Search;
