import Footer from "./Footer";

export default function Shop() {
  return (
    <div>
        <div  className="bg-mycolor px-5 gap-4 flex items-center h-40 md:h-80">
        <h1 className="text-4xl font-myfont font-bold text-white">Shop</h1>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-25">
                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-1.png" alt="img" />
                      <div>
                          <p className="font-bold">Nordic Chair</p>
                          <h3 className="font-bold">$50000</h3>
                      </div>

                    </div>
                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-2.png" alt="img" />
                      <div>
                          <p className="font-bold">Kruzo Aero Chair</p>
                          <h3 className="font-bold">$78000</h3>
                      </div>

                    </div>
                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-3.png" alt="img" />
                      <div>
                          <p className="font-bold">Ergonomic Chair</p>
                          <h3 className="font-bold">$43000</h3>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-1.png" alt="img" />
                      <div>
                          <p className="font-bold">Nordic Chair</p>
                          <h3 className="font-bold">$50000</h3>
                      </div>

                    </div>
                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-2.png" alt="img" />
                      <div>
                          <p className="font-bold">Kruzo Aero Chair</p>
                          <h3 className="font-bold">$78000</h3>
                      </div>

                    </div>
                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-3.png" alt="img" />
                      <div>
                          <p className="font-bold">Ergonomic Chair</p>
                          <h3 className="font-bold">$43000</h3>
                      </div>
                    </div>

                                        <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-1.png" alt="img" />
                      <div>
                          <p className="font-bold">Nordic Chair</p>
                          <h3 className="font-bold">$50000</h3>
                      </div>

                    </div>
                    <div className="flex flex-col gap-4 items-center hover:bg-gray-500 hover:rounded">
                      <img className="w-[300px]" src="product-2.png" alt="img" />
                      <div>
                          <p className="font-bold">Kruzo Aero Chair</p>
                          <h3 className="font-bold">$78000</h3>
                      </div>
                    </div>
        </div>



        <Footer/>
    </div>
  )
}
