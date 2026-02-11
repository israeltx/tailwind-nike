import NikeLogo from "../assets/nike-logo.svg?react";
import { TbShoppingBag } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const ROUTES = ["Home", "About", "Services", "Pricing", "Contact"];

export function Nav({onClickShoppingBtn}) {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between z-10 relative">
      {/* Nike Logo */}
      <a href="#">
        <NikeLogo className="h-20 w-20"></NikeLogo>
      </a>

      {/* Burger Button */}
      <button
        onClick={() => setIsMobileMenuShown(!isMobileMenuShown)}
        className="p-2 focus:ring-2 focus:ring-gray-200 rounded-lg hover:bg-gray-100 lg:hidden"
      >
        <RxHamburgerMenu size={25}></RxHamburgerMenu>
      </button>

      {/* Menu Items */}
      <div
        className={`${!isMobileMenuShown && "hidden"} w-full lg:w-auto lg:block`}
      >
        <ul className="flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg border border-gray-100 lg:border-none rounded-lg p-4 lg:space-x-8">
          {ROUTES.map((route, i) => {
            return (
              <li
                className={`px-3 py-2 cursor-pointer rounded lg:hover:bg-transparent lg:hover:text-blue-500 ${i === 0 ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500" : "hover:bg-gray-100"} 
                ${(i == 3 || i == 4) && "lg:text-white"}`}
                key={route}
              >
                {route}
              </li>
            );
          })}
        </ul>
      </div>
      {/* Shopping Bag Button */}
      <div className="fixed left-4 bottom-4 lg:static lg:mr-8" onClick={onClickShoppingBtn}>
        <div className="flex-center h-12 w-12 rounded-full bg-white shadow-md cursor-pointer">
          <TbShoppingBag />
        </div>
      </div>
    </nav>
  );
}
