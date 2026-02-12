import { QTY, SIZES } from "../constants";
import { Select } from "../components/Select";
import { useState } from "react";

export function ShoeDetail({shoe, onClickAdd}) {
  const [form, setForm] = useState({qty: null, size: null})

  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      {/*Shoe Image*/}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div 
          className="flex-center h-full
          from- bg-linear-to-br from-[#F637CF] from-5% via-[#E3D876] via-40% to-[#4DD4C6]">
          <img src={shoe.src} className="animate-float" />
        </div>
      </div>
      {/*Shoe Details*/}
      <div className="flex-1 space-y-6">
        <div className="text-5xl font-black md:text-9xl"> {shoe.title} </div>
        <div className="font-medium md:text-xl"> {shoe.description} </div>
        {/*Shoe Price*/}
        <div className="flex space-x-6">
          <div className="text-3xl font-extrabold md:text-6xl">$ {shoe.price} </div>

          <Select value={form.qty} title={"QTY"} options={QTY} onChange={(qty) => setForm({...form, qty})}/>
          <Select value={form.size} title={"SIZE"} options={SIZES} onChange={(size) => setForm({...form, size})}/>
        </div>

        {/*Shoe Buttons and Links*/}
        <div className="space-x-8">
          <button className="h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700 cursor-pointer dark:bg-white dark:text-black"
          onClick={() => onClickAdd(shoe, form.qty, form.size)}
          >
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
