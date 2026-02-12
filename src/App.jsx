import { BiSun } from "react-icons/bi"; 
import { BiMoon } from "react-icons/bi"; 
import { NewArrivalsSection } from "./components/NewArrivalsSection";
import { ShoeDetail } from "./components/ShoeDetail";
import { Sidebar } from "./components/Sidebar";
import { Cart } from "./components/Cart";
import { SHOE_LIST } from "./constants";
import { Nav } from "./components/Nav";
import { useState } from "react";

const FAKE_CART_ITEMS = SHOE_LIST.map(shoe => {
  return {
    product: shoe,
    qty: 1,
    size: 44
  }
})

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleDarkMode = () => {
    window.document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "isDarkMode",
      window.document.documentElement.classList.contains("dark"),
    );
  };

  return (
    <div className="animate-fadeIn p-10 xl:px-24 dark:bg-night">
      <Nav onClickShoppingBtn={()=> setIsSidebarOpen(true)}/>
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST}/>
      <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={FAKE_CART_ITEMS}/>
      </Sidebar>
      <div className="fixed bottom-4 right-4">
        <button
          onClick={toggleDarkMode}
          className="bg-night-50 dark:text-night rounded-full px-4 py-2 text-white shadow-lg dark:bg-white cursor-pointer"
        >
          <BiSun className="hidden dark:block" />
          <BiMoon className="dark:hidden" />
        </button>
      </div>
    </div>
  );
}