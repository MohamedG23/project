
export default function Compoabout() {
  return (
    <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold">Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <div className="w-[250px] flex flex-col gap-3 font-myfont text-scolor">
            <img className="w-[250px]" src="person_1.jpg" alt="" />
            <div className="flex flex-col gap-2">
                <a className="text-2xl font-bold underline hover:no-underline text-black" href="#">Lawson Arnold</a>
                <p>CEO, Founder, Atty.</p>
            </div>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a className="underline hover:no-underline text-black" href="#">Learn More</a>
        </div>
        <div className="w-[250px] flex flex-col gap-3 font-myfont text-scolor">
            <img className="w-[250px]" src="person_2.jpg" alt="" />
            <div className="flex flex-col gap-2">
                <a className="text-2xl font-bold underline hover:no-underline text-black" href="#">Jeremy Walker</a>
                <p>CEO, Founder, Atty.</p>
            </div>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a className="underline hover:no-underline text-black" href="#">Learn More</a>
        </div>
        <div className="w-[250px] flex flex-col gap-3 font-myfont text-scolor">
            <img className="w-[250px]" src="person_3.jpg" alt="" />
            <div className="flex flex-col gap-2">
                <a className="text-2xl font-bold underline hover:no-underline text-black" href="#">Patrik White</a>
                <p>CEO, Founder, Atty.</p>
            </div>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a className="underline hover:no-underline text-black" href="#">Learn More</a>
        </div>
        <div className="w-[250px] flex flex-col gap-3 font-myfont text-scolor">
            <img className="w-[250px]" src="person_4.jpg" alt="" />
            <div className="flex flex-col gap-2">
                <a className="text-2xl font-bold underline hover:no-underline text-black" href="#">Kathryn Ryan</a>
                <p>CEO, Founder, Atty.</p>
            </div>
            <p>Separated they live in. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
            <a className="underline hover:no-underline text-black" href="#">Learn More</a>
        </div>

        </div>
    </div>
  )
}
