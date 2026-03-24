
export default function Composeven() {
  return (
    <div className="px-5 py-35 flex flex-col gap-15">
        <div className="flex justify-between">
            <h2 className="text-3xl font-medium">Recent Blog</h2>
            <a href="#">View All Posts</a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
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
        
    </div>
  )
}