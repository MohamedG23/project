import { NavLink, Outlet } from 'react-router-dom'
import { IoMdMenu } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Footer from './Footer';
export default function Layout() {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
        <div className='flex justify-between bg-mycolor p-5 text-white'>
            <h1 className='font-myfont  font-bold text-3xl'>Furni</h1>



            
        <div className="md:hidden relative">
      {/* زر لفتح القائمة */}
      <button 
        onClick={() => setIsOpen(true)}
        className=" text-white "
      >
                    <IoMdMenu className='text-scolor hover:text-white text-4xl' />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* الخلفية المظلمة (Overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40"
            />

            {/* القائمة الجانبية (Sidebar) */}
            <motion.div
              initial={{ x: "-100%" }} // تبدأ من خارج الشاشة يساراً
              animate={{ x: 0 }}       // تدخل للشاشة
              exit={{ x: "-100%" }}    // تخرج عند الإغلاق
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-64 bg-mycolor shadow-xl z-50 p-6"
            >
              <button onClick={() => setIsOpen(false)} className="mb-8 text-red-500">
                Close ✕
              </button>
              
              <nav className="flex flex-col gap-4">
                <a href="/" className="text-lg hover:text-blue-600">Home</a>
                <a href="/shop" className="text-lg hover:text-blue-600">Shop</a>
                <a href="/about" className="text-lg hover:text-blue-600">About Us</a>
                <a href="/blog" className="text-lg hover:text-blue-600">Blog</a>
                <a href="/contact" className="text-lg hover:text-blue-600">Contact US</a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>

            <div className='hidden md:flex gap-25 text-scolor justify-between'>
                <div className='flex gap-6'>
                <NavLink to="/" className={({ isActive }) => `hover:text-white hover:border-b-3 hover:border-b-amber-500 transition-colors ${isActive ? 'active-link text-white border-b-3 border-b-amber-500' : ''}`} >Home</NavLink>
                <NavLink to="/shop" className={({ isActive }) => `hover:text-white hover:border-b-3 hover:border-b-amber-500 transition-colors ${isActive ? 'active-link text-white border-b-3 border-b-amber-500' : ''}`} >Shop</NavLink>
                <NavLink to="/about" className={({ isActive }) => `hover:text-white hover:border-b-3 hover:border-b-amber-500 transition-colors ${isActive ? 'active-link text-white border-b-3 border-b-amber-500' : ''}`} >About Us</NavLink>
                <NavLink to="/Services" className={({ isActive }) => `hover:text-white hover:border-b-3 hover:border-b-amber-500 transition-colors ${isActive ? 'active-link text-white border-b-3 border-b-amber-500' : ''}`} >Survices</NavLink>
                <NavLink to="/blog" className={({ isActive }) => `hover:text-white hover:border-b-3 hover:border-b-amber-500 transition-colors ${isActive ? 'active-link text-white border-b-3 border-b-amber-500' : ''}`} >Blog</NavLink>
                <NavLink to="/contact" className={({ isActive }) => `hover:text-white hover:border-b-3 hover:border-b-amber-500 transition-colors ${isActive ? 'active-link text-white border-b-3 border-b-amber-500' : ''}`} >Contact Us</NavLink>
                </div>
                <div className='text-white flex gap-5'>
                    <a href="/shop"> <FaUser className=' text-2xl' /></a>
                    <a href=""><FiShoppingCart className=' text-2xl' /></a> 
                </div>
            </div>
        </div>

        <div>
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}
