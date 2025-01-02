import React, { ChangeEvent } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchInputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  containerClass?: string;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  className = "",
  containerClass = "",
  placeholder = "Search",
}) => {
  return (
    <div
      className={`border border-[#D0D5DD] shadow-container rounded-[8px] py-[10px] px-[14px] flex items-center gap-[8px] ${containerClass}`}
    >
      <BiSearch />
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Search Property"}
        className={`border-none text-gray500 outline-none placeholder:text-[16px] placeholder:text-gray500 placeholder:leading-[24px] w-full ${className}`}
      />
    </div>
  );
};

export default SearchInput;
