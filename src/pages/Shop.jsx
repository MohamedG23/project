import axios from "axios";
import { div } from "motion/react-client";
import { useEffect, useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

export default function Shop() {
  const [proudect, setproudect] = useState([]);

  useEffect(() => {
    let domain = "http://localhost:1337";
    let endpoint = "/api/prodacts";
    let url = domain + endpoint;
    axios.get(url, { params: { populate: "*" } }).then((res) => {
      console.log(res.data.data);
      setproudect(res.data.data);
    });
  }, []);
  return (
    <div>
      <div className="bg-mycolor px-5 gap-4 flex items-center h-40 md:h-80">
        <h1 className="text-4xl font-myfont font-bold text-white">Shop</h1>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-3 justify-center py-25">
        {proudect?.map((el) => (
          <div className="relative flex flex-col items-center group cursor-pointer w-64 pt-10">
            {/* صورة الكرسي - نستخدم z-10 للتأكد أنها فوق الخلفية */}
            <img
              src={"http://localhost:1337" + el?.coverimg.url}
              alt="Nordic Chair"
              className="w-48 z-10 transition-transform duration-300 group-hover:-translate-y-4"
            />

            {/* خلفية الكارت التي تظهر عند الـ Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0 rounded-2xl transition-all duration-300 group-hover:h-[75%] -z-0"></div>

            {/* نصوص المنتج */}
            <div className="text-center mt-4 z-10">
              <h3 className="text-gray-800 font-semibold text-lg">{el.name}</h3>
              <p className="text-gray-900 font-bold text-xl mt-1">
                ${el.price}
              </p>
            </div>

            {/* زر الإضافة (يظهر فقط عند الـ Hover) */}
            <div className="absolute bottom-[-20px] opacity-0 transition-all duration-300 bg-gray-700/5 rounded-2xl h-50 w-50 flex justify-center items-end group-hover:opacity-100 group-hover:bottom-[-25px] z-20">
              <button className="bg-gray-800 rounded-full p-3 shadow-lg">
                <IoIosAddCircle className="h-8 w-8 text-white bg-gray-800" />
              </button>
            </div>
          </div>
        ))}

        {proudect?.map((el) => (
          <div className="relative flex flex-col items-center group cursor-pointer w-64 pt-10">
            {/* صورة الكرسي - نستخدم z-10 للتأكد أنها فوق الخلفية */}
            <img
              src={"http://localhost:1337" + el?.coverimg.url}
              alt="Nordic Chair"
              className="w-48 z-10 transition-transform duration-300 group-hover:-translate-y-4"
            />

            {/* خلفية الكارت التي تظهر عند الـ Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0 rounded-2xl transition-all duration-300 group-hover:h-[75%] -z-0"></div>

            {/* نصوص المنتج */}
            <div className="text-center mt-4 z-10">
              <h3 className="text-gray-800 font-semibold text-lg">{el.name}</h3>
              <p className="text-gray-900 font-bold text-xl mt-1">
                ${el.price}
              </p>
            </div>

            {/* زر الإضافة (يظهر فقط عند الـ Hover) */}
            <div className="absolute bottom-[-20px] opacity-0 transition-all duration-300 bg-gray-700/5 rounded-2xl h-50 w-50 flex justify-center items-end group-hover:opacity-100 group-hover:bottom-[-25px] z-20">
              <button className="bg-gray-800 rounded-full p-3 shadow-lg">
                <IoIosAddCircle className="h-8 w-8 text-white bg-gray-800" />
              </button>
            </div>
          </div>
        ))}

        {proudect?.map((el) => (
          <div className="relative flex flex-col items-center group cursor-pointer w-64 pt-10">
            {/* صورة الكرسي - نستخدم z-10 للتأكد أنها فوق الخلفية */}
            <img
              src={"http://localhost:1337" + el?.coverimg.url}
              alt="Nordic Chair"
              className="w-48 z-10 transition-transform duration-300 group-hover:-translate-y-4"
            />

            {/* خلفية الكارت التي تظهر عند الـ Hover */}
            <div className="absolute bottom-0 left-0 right-0 h-0 rounded-2xl transition-all duration-300 group-hover:h-[75%] -z-0"></div>

            {/* نصوص المنتج */}
            <div className="text-center mt-4 z-10">
              <h3 className="text-gray-800 font-semibold text-lg">{el.name}</h3>
              <p className="text-gray-900 font-bold text-xl mt-1">
                ${el.price}
              </p>
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
    </div>
  );
}
