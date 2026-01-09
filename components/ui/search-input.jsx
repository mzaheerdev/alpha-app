import { PiMagnifyingGlass } from "react-icons/pi";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";


export default function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  className = "",
  ...props
}) {
  return (
     <div className="relative inline-flex items-center">
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`bg-primary-ex-light w-70.75 py-2.5 px-4 gap-1.5 rounded-[20px] h-9.5 border border-primary-ex-light outline-none focus:outline-none focus:ring-0.5 focus:ring-primary focus:border-primary ${className}`}
      {...props}
    />
    <HiMiniMagnifyingGlass size={18} className="absolute right-3 top-1/2 transform -translate-y-1/2  text-primary " />
    </div>
  );
}
