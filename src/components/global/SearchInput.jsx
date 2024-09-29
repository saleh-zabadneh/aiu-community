import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const SearchInput = ({ onSearch, name }) => {
  const [search, setSearch] = useState("");

  return (
    <div className="relative flex items-center">
      <SearchIcon className="absolute w-5 h-5 -translate-y-1/2 left-3 top-1/2 text-muted-foreground" />
      <Input
        type="search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`Search ${name}...`}
        className="pl-10 w-full md:w-[300px] rounded-md"
      />
      <Button
        variant="secondary"
        className="px-4 py-2 ml-2 rounded-md"
        onClick={() => onSearch(search)}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
