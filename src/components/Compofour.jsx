
export default function Compofour() {
  return (
    <div className="py-20 flex flex-col lg:flex-row px-3 lg:px-0 gap-30 md:gap-30 lg:gap-0 md:items-center lg:justify-around">
        <div className="lg:w-[700px] flex items-start gap-5 relative">
            <img className="w-[200px] md:w-[400px] rounded-3xl" src="img-grid-1.jpg" alt="" />
            <img className="w-[100px] md:w-[200px] rounded-3xl" src="img-grid-2.jpg" alt="" />
            <img className="w-[150px] md:w-[300px] rounded-3xl absolute top-30 right-0 md:top-55 lg:right-20 md:right-0" src="img-grid-3.jpg" alt="" />
        </div>
        <div className="lg:w-[500px] flex flex-col font-myfont gap-8">
            <h1 className="text-4xl">We Help You Make Modern Interior Design</h1>
            <p className="text-scolor">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada</p>
            <div className="grid grid-cols-2 gap-5">
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 border-2 border-black rounded-full"/>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 border-2 border-black rounded-full"/>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 border-2 border-black rounded-full"/>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 border-2 border-black rounded-full"/>
                    <p className="text-scolor">Donec vitae odio quis nisl dapibus malesuada</p>
                </div>
            </div>
            <button className="bg-black text-white w-30 h-13 rounded-4xl">Explor</button>
        </div>
    </div>
  )
}
