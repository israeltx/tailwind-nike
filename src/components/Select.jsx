import { IoIosArrowDown } from "react-icons/io";

export function Select({ options, title }) {
  return (
    <div className="relative">
      <select
        defaultValue={""}
        className="w-24 appearance-none border border-gray-300 p-4 bg-white cursor-pointer"
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
