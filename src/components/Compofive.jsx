
export default function Compofive() {
  return (
    <div className="py-20 px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="flex gap-4 items-center">
          <img className="w-[100px] bg-bcolor rounded-3xl" src="product-1.png" alt="img" />
          <div className="flex flex-col gap-2">
              <h1 className="font-bold">Nordic Chair</h1>
              <p className="text-scolor">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a className="hover:text-scolor" href="#">Read More</a>
          </div>
          </div>
                  <div className="flex gap-4 items-center">
          <img className="w-[100px] bg-bcolor rounded-3xl" src="product-2.png" alt="img" />
          <div className="flex flex-col gap-2">
              <h1 className="font-bold">Nordic Chair</h1>
              <p className="text-scolor">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a className="hover:text-scolor" href="#">Read More</a>
          </div>
          </div>
                  <div className="flex gap-4 items-center">
          <img className="w-[100px] bg-bcolor rounded-3xl" src="product-3.png" alt="img" />
          <div className="flex flex-col gap-2">
              <h1 className="font-bold">Nordic Chair</h1>
              <p className="text-scolor">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio</p>
              <a className="hover:text-scolor" href="#">Read More</a>
          </div>
          </div>
    </div>
  )
}
