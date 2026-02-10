import NikeLogo from "../assets/nike-logo.svg?react";
import { RxHamburgerMenu } from "react-icons/rx";

export function Nav() {
  return (
    <nav className="flex items-center justify-between">
      {/* Nike Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20"></NikeLogo>
      </a>
      {/* Burger Button */}
      <button className="p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100">
        <RxHamburgerMenu size={25}></RxHamburgerMenu>
      </button>
    </nav>
  );
}
