import { FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";
import { TbRepeat } from "react-icons/tb";
import Compotwo from "../components/Compotwo";
import Composex from "../components/Composex";
import Footer from "./Footer";

export default function Services() {
  return (
    <div className="flex flex-col gap-25">
        <div className="bg-mycolor flex px-5 gap-4">
                <div className=" text-white  flex flex-col justify-center gap-8">
            <h1 className="font-myfont text-5xl font-bold">Services</h1>
            <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            <div className="flex gap-5">
                <a className="text-black py-1 px-7 text-2xl bg-amber-500 hover:bg-amber-600 rounded-4xl" href="/shop">Shop</a>
                <a className="py-1 px-7 text-2xl border-1 border-scolor hover:border-white rounded-4xl" href="/shop">Explor</a>
            </div>
        </div>
        <div>
          <img className="w-[1000px]" src="couch.png" alt="#" />
        </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 px-5">
                <div className="flex flex-col gap-4">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <FiTruck className="text-3xl" />   
                </div>                    
                    <h3 className="font-bold">Easy to Shop</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="flex flex-col gap-4 ">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <FiShoppingBag className="text-3xl" />   
                </div>
                    <h3 className="font-bold">Fast & Free Shipping</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <FiLifeBuoy className="text-3xl" />   
                </div>
                    <h3 className="font-bold">24/7 Support</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <TbRepeat className="text-3xl" />   
                </div> 
                    <h3 className="font-bold">Hassle Free Returns</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>


                                <div className="flex flex-col gap-4">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <FiTruck className="text-3xl" />   
                </div>                    
                    <h3 className="font-bold">Easy to Shop</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="flex flex-col gap-4 ">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <FiShoppingBag className="text-3xl" />   
                </div>
                    <h3 className="font-bold">Fast & Free Shipping</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <FiLifeBuoy className="text-3xl" />   
                </div>
                    <h3 className="font-bold">24/7 Support</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
                <div className="flex flex-col gap-4">
                <div className="relative flex items-start justify-start">
                    <div className="absolute left-4 top-1 w-8 h-8 bg-gray-200 rounded-full -z-10" />
                    <TbRepeat className="text-3xl" />   
                </div> 
                    <h3 className="font-bold">Hassle Free Returns</h3>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
                </div>
    </div>

    <Compotwo/>
    <Composex/>

    </div>
  )
}
