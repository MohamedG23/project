import Composex from "../components/Composex";
import Footer from "./Footer";

export default function Blog() {
  return (
    <div className="flex flex-col gap-20">
        
        <div className="bg-mycolor flex flex-col md:flex-row px-5 gap-4">
                <div className=" text-white  flex flex-col justify-center gap-8">
            <h1 className="font-myfont text-5xl font-bold">Blog</h1>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5">
          <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-1.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">First Time Home Owner Ideas</h1>
            <p>by Kristin Watson on Dec 19, 2021</p>
          </div>

                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-2.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">How To Keep Your Furniture Clean</h1>
            <p>by Robert Fox on Dec 15, 2021</p>
          </div>

                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-3.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">Small Space Furniture Apartment Ideas</h1>
            <p>by Kristin Watson on Dec 12, 2021</p>
          </div>


                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-1.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">First Time Home Owner Ideas</h1>
            <p>by Kristin Watson on Dec 19, 2021</p>
          </div>

                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-2.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">How To Keep Your Furniture Clean</h1>
            <p>by Robert Fox on Dec 15, 2021</p>
          </div>

                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-3.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">Small Space Furniture Apartment Ideas</h1>
            <p>by Kristin Watson on Dec 12, 2021</p>
          </div>


                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-1.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">First Time Home Owner Ideas</h1>
            <p>by Kristin Watson on Dec 19, 2021</p>
          </div>

                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-2.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">How To Keep Your Furniture Clean</h1>
            <p>by Robert Fox on Dec 15, 2021</p>
          </div>

                    <div className="w-[300px] md:w-[400px]">
            <a className="relative w-[400px] h-[500px] group cursor-pointer overflow-hidden rounded-[50px] shadow-lg" href="#">
  <div className="absolute inset-0 bg-gray-100/40 opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100 flex items-center justify-center"/>            
              <img className="rounded-2xl" src="post-3.jpg" alt="img"/>
            </a>
            <h1 className="font-bold py-2" href="#">Small Space Furniture Apartment Ideas</h1>
            <p>by Kristin Watson on Dec 12, 2021</p>
          </div>
        </div>

        <Composex/>

    </div>
  )
}
