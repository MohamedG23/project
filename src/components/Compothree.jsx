import { FiTruck } from "react-icons/fi";
import { FiShoppingBag } from "react-icons/fi";
import { FiLifeBuoy } from "react-icons/fi";
import { TbRepeat } from "react-icons/tb";


export default function Compothree() {
  return (
    <div className="py-20 flex flex-col lg:flex-row justify-between items-center lg:justify-around gap-25">
        <div className="flex flex-col justify-around gap-5 font-myfont w-[300px] md:w-[600px]">
            <div>
                <h1 className="pb-2 text-4xl">Why Choose Us</h1>
                <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
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
        </div>
        <div className="relative">
            <img className="absolute right-50 bottom-70 md:right-75 md:bottom-95 -z-40" src="dots-yellow.svg" alt="" />
            <img className="w-[350px] md:w-[450px] z-0 rounded-3xl" src="why-choose-us-img (1).jpg" alt="" />
        </div>
    </div>
  )
}
