import nike1 from "../assets/n1-min.png";
import { QTY, SIZES } from "../constants";
import { Select } from "../components/Select";

export function ShoeDetail() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4">
      {/*Shoe Image*/}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className="flex-center h-full from- bg-linear-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={nike1} />
        </div>
      </div>
      {/*Shoe Details*/}
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl">Nike Air max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is a lifestyle shoe that's sure to turn heads with its vibrant color gradient."
          }
        </div>
        {/*Shoe Price*/}
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">$ 100</div>

          <Select title={"QTY"} options={QTY} />
          <Select title={"SIZE"} options={SIZES} />
        </div>

        {/*Shoe Buttons and Links*/}
        <div className="space-x-8">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add to bag
          </button>
          <a
            href="#"
            className="text-lg font-bold underline underline-offset-4"
          >
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
