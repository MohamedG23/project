import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Compotwo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-7 py-20 font-myfont grid grid-cols-1 md:grid-cols-4 gap-5">
        <div className="flex justify-center flex-col gap-8">
            <h1 className=" text-5xl">Crafted with excellent material.</h1>
            <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <a className="w-[100px] rounded-3xl px-5 py-2 bg-black text-white" href="/about">Explor</a>
        </div>
        <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
          <img className="w-[300px]" src="product-1.png" alt="img" />
          <div>
              <p className="font-bold">Nordic Chair</p>
              <h3 className="font-bold">$50000</h3>
          </div>
          <div className="bg-gray-400">
            <IoIosAddCircle />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
          <img className="w-[300px]" src="product-2.png" alt="img" />
          <div>
              <p className="font-bold">Kruzo Aero Chair</p>
              <h3 className="font-bold">$78000</h3>
          </div>
          <div className="bg-gray-400">
            <IoIosAddCircle />
          </div>
        </div>
        <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
          <img className="w-[300px]" src="product-3.png" alt="img" />
          <div>
              <p className="font-bold">Ergonomic Chair</p>
              <h3 className="font-bold">$43000</h3>
          </div>
          <div className="bg-gray-400">
            <IoIosAddCircle />
          </div>
        </div>
    </div>
  )
}
