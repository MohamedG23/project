import { IoIosAddCircle } from "react-icons/io";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Compotwo() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="px-7 py-20 font-myfont grid grid-cols-1 md:grid-cols-4 gap-5">
      <div className="flex justify-center flex-col gap-8">
        <h1 className=" text-5xl">Crafted with excellent material.</h1>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <a
          className="w-[100px] rounded-3xl px-5 py-2 bg-black text-white"
          href="/about"
        >
          Explor
        </a>
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

      <div className="relative flex flex-col items-center group cursor-pointer w-64 pt-10">
        {/* صورة الكرسي - نستخدم z-10 للتأكد أنها فوق الخلفية */}
        <img
          src="product-1.png"
          alt="Nordic Chair"
          className="w-48 z-10 transition-transform duration-300 group-hover:-translate-y-4"
        />

        {/* خلفية الكارت التي تظهر عند الـ Hover */}
        <div className="absolute bottom-0 left-0 right-0 h-0 bg-gray-200/50 rounded-2xl transition-all duration-300 group-hover:h-[75%] -z-0"></div>

        {/* نصوص المنتج */}
        <div className="text-center mt-4 z-10">
          <h3 className="text-gray-800 font-semibold text-lg">Nordic Chair</h3>
          <p className="text-gray-900 font-bold text-xl mt-1">$50.00</p>
        </div>

        {/* زر الإضافة (يظهر فقط عند الـ Hover) */}
        <div className="absolute bottom-[-20px] opacity-0 transition-all duration-300 bg-gray-700/5 rounded-2xl h-50 w-50 flex justify-center items-end group-hover:opacity-100 group-hover:bottom-[-25px] z-20">
          <button className="bg-gray-800 rounded-full p-3 shadow-lg">
            <IoIosAddCircle className="h-8 w-8 text-white bg-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
