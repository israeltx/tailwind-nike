import { IoIosArrowDown } from "react-icons/io";
import { twMerge } from "tw-merge";

export function Select({ options, title, className, defaultValue }) {
  return (
    <div className="relative">
      <select
        defaultValue={defaultValue || ""}
        className={twMerge(`w-24 appearance-none border border-gray-300 p-4 bg-white cursor-pointer ${className}`)}
      >
        <option value="" disabled hidden>
          {title}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex-center pr-3 pointer-events-none">
        <IoIosArrowDown />
      </div>
    </div>
  );
}
