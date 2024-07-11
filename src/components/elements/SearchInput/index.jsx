import { cn } from "../../../utils";
import { IoSearch } from "react-icons/io5";

const SearchInput = ({ className }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute mt-3 flex items-center pl-3">
        <IoSearch size={24} className="text-gray-400" />
      </span>
      <input
        className={cn(
          "p-3 pl-12",
          "bg-slate-800",
          "text-white",
          "rounded-lg",
          "border border-slate-700",
          "placeholder:text-slate-400",
          "focus:outline-none",
        )}
        type="search"
        placeholder="Search restaurant name..."
        autoComplete="off"
      />
    </div>
  );
};

export default SearchInput;
