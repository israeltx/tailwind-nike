import { Nav } from "./components/Nav";
import { ShoeDetail } from "./components/ShoeDetail";

export default function App() {
  return (
    <div className="p-10 xl:px-24 animate-fadeIn">
      <Nav />
      <ShoeDetail />
    </div>
  );
}
