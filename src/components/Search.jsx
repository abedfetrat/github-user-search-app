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
    <div className="relative mt-9">
      <div className="relative flex items-center gap-x-2 overflow-hidden rounded-2xl bg-white-as-heaven p-2 shadow-xl dark:bg-fainting-light dark:shadow-none md:gap-x-6">
        <SearchIcon className="ml-2 block min-w-[25px] md:ml-6" />
        <input
          className="min-w-0 flex-1 self-stretch bg-transparent caret-blue-sparkle outline-none placeholder:text-inherit md:text-lg"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          placeholder="Search GitHub username..."
        />
        <button
          className="min-w-[84px] rounded-xl bg-blue-sparkle px-4 py-3 text-sm font-bold text-white transition-colors hocus:bg-abi-blue md:min-w-[106px] md:px-6 md:text-base"
          onClick={handleSearch}
        >
          Search
        </button>
        {loading && (
          <div className="absolute left-0 bottom-0 block h-[3px] w-[200px] animate-shoot bg-gradient-to-r from-transparent via-blue-sparkle"></div>
        )}
      </div>
      {error && (
        <p className="absolute bottom-[calc(100%+7px)] left-1/2 -translate-x-1/2 text-sm text-tart-orange lg:absolute lg:top-1/2 lg:bottom-auto lg:left-auto lg:right-36 lg:-translate-y-1/2">
          No results
        </p>
      )}
    </div>
  );
}

export default Search;
