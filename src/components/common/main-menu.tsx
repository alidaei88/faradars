/* eslint-disable @next/next/no-img-element */
import Image, { ImageProps } from "next/image";
import { FC } from "react";
import { VscSearch } from 'react-icons/vsc';
import { FaChalkboardTeacher } from 'react-icons/fa'

const MainMenu: FC = () => { 
  
  return (
    <nav className="container h-16 mx-auto flex justify-between items-center">
      <img
        className="h-14 w-28"
        alt="logo"
        // layout={"fill"}
        src={"/images/logos/logo.svg"}
      />
      <button className="bg-white hover:bg-[#1E88E5] hover:bg-opacity-10 text-[#1e85e5] font-semibold py-2 px-4 border border-[#1e85e5] rounded shadow">همه آموزش‌ها</button>
      <div className="mt-1 relative w-1/4 flex items-center border border-gray-200 rounded-lg">
        <input
          type="text"
          name="search"
          id="search"
          className="shadow-sm py-2  block w-full pr-2 sm:text-sm border-gray-300 rounded-md focus:outline-[#1E88E5]"
          placeholder="جستجوی آموزش..."
          value={""}
        />
        <div className="absolute inset-y-0 left-0 flex py-1.5 ">
          <kbd className="inline-flex items-center rounded px-2 text-md font-medium text-gray-400">
            <button><VscSearch /></button>
          </kbd>
        </div>
      </div>
      <div className="flex justify-between align-middle w-1/5">
        <p className="flex align-middle cursor-pointer"> <span className="text-2xl mt-1 text-slate-500 ml-1" ><FaChalkboardTeacher /></span>تدریس در فرادرس</p>
        <p className="cursor-pointer">ورود</p>
        <p className="cursor-pointer mt-[4px]">ثبت نام</p>
      </div>
    </nav>
  );
}

export default MainMenu;
