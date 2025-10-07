import React from "react";
import { Input } from "@/components/ui/input";
interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="mb-4 w-3/4">
      <h3 className="font-bold text-lg mb-2">Search News</h3>
      <Input
        className="p-2 border rounded-md w-full"
        placeholder="Search News...."
        type="text"
        onChange={(e) => {
          onSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchBar;
