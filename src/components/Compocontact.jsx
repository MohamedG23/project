import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

export default function Compocontact() {
  return (
    <div className="flex flex-col items-center px-5 py-10 gap-8">
        <div className="flex flex-col md:flex-row gap-7">
        <div className="flex gap-3 w-55">
            <p className="bg-mycolor h-7 w-10 text-center text-2xl text-white rounded"><CiLocationOn /></p>
            <p>43 Raymouth Rd. Baltemoer, London 3910</p>
        </div>
        <div className="flex gap-3 w-55">
            <p className="bg-mycolor w-7 h-7 text-center text-2xl text-white rounded"><CiMail /></p>
            <p>info@yourdomain.com</p>
        </div>
        <div className="flex gap-3 w-55">
            <p className="bg-mycolor w-7 h-7 text-center text-2xl text-white rounded"><FaPhoneAlt /></p>
            <p>+1 294 3925 3939</p>
        </div>
        </div>
        <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-1">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Type here" className="input md:w-85" />
                </div>

                <div className="flex flex-col gap-1">
                <label htmlFor="">Last Name</label>
                <input type="text" placeholder="Type here" className="input md:w-85" />
                </div>
            </div>
                <div className="flex flex-col gap-1">
                <label htmlFor="">First Name</label>
                <input type="text" placeholder="Type here" className="input md:w-174.5" />
                </div>

                <div className="flex flex-col gap-1 pb-7">
                    <label htmlFor="">Massege</label>
                    <textarea className="textarea md:w-174.5"></textarea>
                </div>
                <button className="bg-black text-white w-40 h-10 rounded-2xl hover:bg-gray-900">Send Message</button>
        </div>
    </div>
  )
}
