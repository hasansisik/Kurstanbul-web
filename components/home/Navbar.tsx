import { useSelector } from 'react-redux';
import Image from 'next/image';
import MenuIcon from "../../public/icons/menu.svg";
import {RootState } from '@/redux/store'

export const Navbar = () => {
  const company = useSelector((state: RootState) => state.company);

  return (
    <div className="bg-black">
      <div className="px-4">
        <div className="container bg-black">
          <div className="py-4 flex items-center justify-between">
            <div className="relative">
              <div className="absolute w-full top-2 bottom-0 "></div>

              <Image 
                src="/images/logo2.png"
                alt="Logo"
                width={130}
                height={40}
                className="relative mt-1"
              />
            </div>
            <div className="border border-white border-opacity-30 h-10 w-10 inline-flex justify-center items-center rounded-lg sm:hidden">
              <MenuIcon className="text-white" />
            </div>
            <nav className="text-white gap-6 items-center hidden sm:flex">
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Hakkımızda
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                SSS
              </a>
              <a
                href="#"
                className="text-opacity-60 text-white hover:text-opacity-100 transition"
              >
                Politikalar
              </a>
              <button 
                className="bg-white py-2 px-4 rounded-lg text-black"
                onClick={() => {
                  const redirectPath = company ? '/dashboard' : '/auth/login';
                  window.location.href = redirectPath;
                }}
              >
                Kurstanbul KOS
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
