import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Footer() {
  return (
    <div className="py-25 px-5 flex flex-col gap-10 font-myfont">
        <div>
            <div className="flex gap-2">
            <CiMail className="text-2xl" />
            <p className=" font-bold font-myfont">Subscribe to Newsletter</p>
            </div>
            <div className="relative flex flex-col md:flex-row items-center gap-3">
                <img className="absolute bottom-39 md:right-25 md:bottom-[-30px] w-[300px] md:w-[350px]" src="sofa.png" alt="" />
                <input type="text" placeholder="Enter Your Name" className="input w-[250px] rounded" />
                <input type="text" placeholder="Enter Your Email" className="input w-[250px] rounded" />
                <button className=" py-3 px-5 text-2xl rounded-2xl bg-mycolor text-white"><FaTelegramPlane /></button>
            </div>
        </div>
        <div className="pb-5 flex flex-col md:flex-row gap-5">
            <div className="flex flex-col gap-3">
                <a className="text-mycolor font-myfont text-3xl font-bold" href="#">Furni.</a>
                <p className="font-myfont text-scolor">Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique. Pellentesque habitant</p>
                <div className="flex gap-2">
                    <a  className=" text-mycolor bg-scolor p-3 rounded-full hover:bg-mycolor hover:text-white" href="#">
                        <FaFacebookF />
                    </a>
                    <a  className=" text-mycolor bg-scolor p-3 rounded-full hover:bg-mycolor hover:text-white" href="#">
                        <FaTwitter />
                    </a>
                    <a  className=" text-mycolor bg-scolor p-3 rounded-full hover:bg-mycolor hover:text-white" href="#">
                        <FaInstagram />
                    </a>
                    <a  className=" text-mycolor bg-scolor p-3 rounded-full hover:bg-mycolor hover:text-white" href="#">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className=" flex gap-5">
                <div className="w-[200px] flex flex-col gap-2">
                    <a className="hover:text-scolor" href="#">About Us</a>
                    <a className="hover:text-scolor" href="#">Services</a>
                    <a className="hover:text-scolor" href="#">Blog</a>
                    <a className="hover:text-scolor" href="#">Contact Us</a>
                </div>
                <div className="w-[200px] flex flex-col gap-2">
                    <a className="hover:text-scolor" href="#">Support</a>
                    <a className="hover:text-scolor" href="#">Knowledge base</a>
                    <a className="hover:text-scolor" href="#">Live chat</a>
                </div>
            </div>
            <div className=" flex gap-5">
                <div className="w-[200px] flex flex-col gap-2">
                    <a className="hover:text-scolor" href="#">Jobs</a>
                    <a className="hover:text-scolor" href="#">Our team</a>
                    <a className="hover:text-scolor" href="#">Leadership</a>
                    <a className="hover:text-scolor" href="#">Privacy Policy</a>
                </div>
                <div className="w-[200px] flex flex-col gap-2">
                    <a className="hover:text-scolor" href="#">Nordic Chair</a>
                    <a className="hover:text-scolor" href="#">Kruzo Aero</a>
                    <a className="hover:text-scolor" href="#">Ergonomic Chair</a>
                </div>
            </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-8 md:justify-between border-t-scolor border-t-1 pt-8">
            <p className="text-scolor text-center md:text-start md:w-[550px]">Copyright ©2026. All Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</p>
           <div className="flex justify-between gap-5">
            <a className="hover:text-scolor" href="#">Terms & Conditions</a>
            <a className="hover:text-scolor" href="#">Privacy Policy</a>
           </div>
        </div>
    </div>
  )
}
