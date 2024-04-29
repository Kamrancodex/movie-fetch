import { useState, useEffect, Fragment } from "react";
import SearchBar from "./SearchBar";

export default function Navbar({ query, setQuery }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-violet-950 h-16 p-6 rounded-xl flex justify-between items-center">
      {!isMobile ? (
        <Fragment>
          <h3 className="text-xl text-white font-extrabold uppercase inline">
            Popcorn🍿
          </h3>

          <SearchBar query={query} setQuery={setQuery} />
          <h3 className="text-l text-white font-bold uppercase">
            Made with 💖 using React and Tailwind
          </h3>
        </Fragment>
      ) : (
        <SearchBar query={query} setQuery={setQuery} />
      )}
    </div>
  );
}
