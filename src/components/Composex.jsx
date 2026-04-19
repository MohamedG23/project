
export default function Composex() {
  return (
    <div className="p-10 flex flex-col justify-center items-center gap-8">

        <h1 className="text-4xl font-medium">Testimonials</h1>


        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full flex justify-center">
    <div className="flex flex-col items-center justify-center gap-10 w-[700px]">
        <p className="text-scolor">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
        <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[70px] rounded-full" src="person-1.png" alt="" />
            <h2>Maria Jones</h2>
            <p className="text-scolor">CEO, Co-Founder, XYZ Inc.</p>
        </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>

    <div id="slide2" className="carousel-item relative w-full flex justify-center">
    <div className="flex flex-col items-center justify-center gap-10 w-[700px]">
        <p className="text-scolor">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
        <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[70px] rounded-full" src="person-1.png" alt="" />
            <h2>Maria Jones</h2>
            <p className="text-scolor">CEO, Co-Founder, XYZ Inc.</p>
        </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>

    <div id="slide3" className="carousel-item relative w-full flex justify-center">
    <div className="flex flex-col items-center justify-center gap-10 w-[700px]">
        <p className="text-scolor">“Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer convallis volutpat dui quis scelerisque.”</p>
        <div className="flex flex-col items-center justify-center gap-2">
            <img className="w-[70px] rounded-full" src="person-1.png" alt="" />
            <h2>Maria Jones</h2>
            <p className="text-scolor">CEO, Co-Founder, XYZ Inc.</p>
        </div>
    </div>

    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>




  {/* <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> */}
</div>
    </div>
  )
}
