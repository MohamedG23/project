import { IoIosAddCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";

export default function Compotwo() {
  const [proudect , setproudect] = useState([])

  useEffect(() => {
    let domain = "http://localhost:1337";
    let endpoint = "/api/prodacts";
    let url = domain + endpoint;
    axios.get(url, { params: { populate: "*" } }).then((res) => {
      console.log(res.data.data);
      setproudect(res.data.data)
    });
  }, []);
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

      {proudect?.map((el) => (
        <div key={el.documentId} className="relative flex flex-col items-center group cursor-pointer w-64 pt-10">
          {/* صورة الكرسي - نستخدم z-10 للتأكد أنها فوق الخلفية */}
          <img
            src={'http://localhost:1337' + el?.coverimg.url}
            alt="Nordic Chair"
            className="w-48 z-10 transition-transform duration-300 group-hover:-translate-y-4"
          />

          {/* خلفية الكارت التي تظهر عند الـ Hover */}
          <div className="absolute bottom-0 left-0 right-0 h-0 bg-gray-200/50 rounded-2xl transition-all duration-300 group-hover:h-[75%] -z-0"></div>

          {/* نصوص المنتج */}
          <div className="text-center mt-4 z-10">
            <h3 className="text-gray-800 font-semibold text-lg">
              {el.name}
            </h3>
            <p className="text-gray-900 font-bold text-xl mt-1">${el.price}</p>
          </div>

          {/* زر الإضافة (يظهر فقط عند الـ Hover) */}
          <div className="absolute bottom-[-20px] opacity-0 transition-all duration-300 bg-gray-700/5 rounded-2xl h-50 w-50 flex justify-center items-end group-hover:opacity-100 group-hover:bottom-[-25px] z-20">
            <button className="bg-gray-800 rounded-full p-3 shadow-lg">
              <IoIosAddCircle className="h-8 w-8 text-white bg-gray-800" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
