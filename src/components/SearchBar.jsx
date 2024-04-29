import { FaSearch } from "react-icons/fa";
export default function SearchBar({ query, setQuery }) {
  return (
    <div className="inline flex gap-2 items-center">
      <input
        type="text"
        placeholder="search movies here...."
        className="border-green-600 rounded-md w-64 h-8 text-center items-center"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
      <div className="font-bold text-white text-xl">
        <FaSearch />
      </div>
    </div>
  );
}
