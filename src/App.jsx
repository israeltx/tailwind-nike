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

  return (
    <div className="animate-fadeIn p-10 xl:px-24">
      <Nav onClickShoppingBtn={()=> setIsSidebarOpen(true)}/>
      <ShoeDetail />
      <NewArrivalsSection items={SHOE_LIST}/>
      <Sidebar isOpen={isSidebarOpen} onClickClose={() => setIsSidebarOpen(false)}>
        <Cart cartItems={FAKE_CART_ITEMS}/>
      </Sidebar>
    </div>
  );
}