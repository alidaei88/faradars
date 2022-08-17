import Image, { ImageProps } from "next/image";
import { FC, InputHTMLAttributes, MutableRefObject, useRef, useEffect, useState, useContext } from "react";
import { VscSearch } from 'react-icons/vsc';
import { FaChalkboardTeacher, FaUserCircle } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useRouter } from "next/router";
import Link from "next/link";
import { CurrentUserContext } from "../../ContextAPi";

const MainMenu: FC = () => {

  const searchRef: any = useRef<HTMLInputElement | null>();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState("")
  const { userData, setUserData } = useContext(CurrentUserContext)

  useEffect(() => {
    try {
      const storageData = JSON.parse(localStorage.getItem("data") || "")
      setUserData(storageData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    try {
      setIsLogin(userData.token)

    } catch (error) {
      console.log(error)
    }

  }, [userData])


  const handleSearch = () => {
    router.push(`/search/${searchRef.current.value}`);
  }
  return (
    <nav className=" w-full m-auto h-[60px] xl:px-8 xxsm:px-2 sticky top-0 right-0 z-10 bg-white border border-b border-[#E3E3E3]-100">
      <div className="xl:container xxsm:w-full flex xl:justify-start  px-[16px] h-[40px] items-center mx-auto my-[10px] xxsm:justify-between">
        <div className="flex items-center">
        <div className="xl:hidden ml-2">
          {/* <GiHamburgerMenu className="" /> */}
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 1.17391C0 0.525815 0.525815 0 1.17391 0H20.7391C21.3897 0 21.913 0.525815 21.913 1.17391C21.913 1.82446 21.3897 2.34783 20.7391 2.34783H1.17391C0.525815 2.34783 0 1.82446 0 1.17391ZM0 9C0 8.34946 0.525815 7.82609 1.17391 7.82609H20.7391C21.3897 7.82609 21.913 8.34946 21.913 9C21.913 9.65054 21.3897 10.1739 20.7391 10.1739H1.17391C0.525815 10.1739 0 9.65054 0 9ZM20.7391 18H1.17391C0.525815 18 0 17.4766 0 16.8261C0 16.1755 0.525815 15.6522 1.17391 15.6522H20.7391C21.3897 15.6522 21.913 16.1755 21.913 16.8261C21.913 17.4766 21.3897 18 20.7391 18Z"
              fill="#6C757D"
            >
            </path>
          </svg>
        </div>
        <div className="xl:mr-[80px] mt-2 xxsm:mr-[10px]">
          <Link href="/">
            <a className="">
              <Image
                alt="logo"
                width={106}
                height={28}
                layout={"fixed"}
                src={"/images/logos/logo.svg"}
              />
            </a>
          </Link>
          </div>
          </div>
        <div className="xl:hidden mb-2 ml-2">
          <svg className="fill-[#495057]"
            width="22"
            height="22"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M1.60156 19.6914L6.83594 14.457C8.22266 15.5899 9.96875 16.2149 11.875 16.2149C16.3633 16.2149 20 12.577 20 8.08986C20 3.60274 16.3621 0 11.875 0C7.38789 0 3.75 3.63751 3.75 8.08986C3.75 9.99572 4.41055 11.7442 5.50938 13.1289L0.275 18.3633C0.0898437 18.5821 0 18.8242 0 19.0625C0 19.3008 0.0915623 19.5422 0.274649 19.7254C0.640625 20.0899 1.23437 20.0899 1.60156 19.6914ZM11.875 1.87501C15.3211 1.87501 18.125 4.67892 18.125 8.12501C18.125 11.5711 15.3211 14.375 11.875 14.375C8.42891 14.375 5.625 11.5711 5.625 8.12501C5.625 4.67892 8.42969 1.87501 11.875 1.87501Z">
          </path>
          </svg>
        </div>
        <div className="xl:flex w-full justify-between pr-[48px] xxsm:hidden">
          <div className="flex w-[48%]">
            <button className="bg-white hover:bg-[#1E88E5] hover:bg-opacity-10 text-[#1e85e5] font-medium text-[14px] px-[18px] py-2 my-auto border border-[#1e85e5] rounded">همه آموزش‌ها</button>
            <div className="relative w-[71%] flex items-baseline rounded-lg mr-2">
              <input
                type="text"
                name="search"
                id="search"
                className="shadow-sm w-full px-1 py-2 my-3 sm:text-sm border border-[#E3E3E3] text-slate-600 placeholder-slate-600 placeholder-opacity-30 placeholderfont-thin rounded-sm focus:shadow-md focus:outline-[#1E88E5]"
                placeholder="جستجوی آموزش..."
                ref={searchRef}
              />
              <div className="absolute inset-y-0 left-0 flex py-1.5 ">
                <kbd className="inline-flex items-center rounded px-2 font-medium text-gray-400">
                  <button className="text-2xl" onClick={handleSearch} ><VscSearch /></button>
                </kbd>
              </div>
            </div>
          </div>
          <div className=" flex w-[35%] items-center pl-[16px]">
            <p className=" flex items-center align-middle cursor-pointer text-[14px] text-[#495057] px-[18px] py-[8px]"> <span className="text-xl mt-1 text-slate-400 ml-2" ><FaChalkboardTeacher /></span>تدریس در فرادرس</p>
            {
              isLogin ?
                <Link href={"/userAccount"}>
                  <a className="px-[0.9rem] py-3">
                    <p className="flex items-center align-middle cursor-pointer text-[14px] text-[#495057]"> <span className="text-2xl mt-1 text-slate-500 ml-1" ><FaUserCircle /></span>حساب کاربری</p>
                  </a>
                </Link>
                :
                <>
                  <Link href={"/login"}>
                    <a className="px-[0.9rem] py-3">
                      <p className="cursor-pointer text-[#495057] text-[14px]">ورود</p>
                    </a>
                  </Link><Link href={`/register`}>
                    <a className="px-[0.9rem] py-3">
                      <p className="cursor-pointer text-[#495057] text-[14px]">ثبت نام</p>
                    </a>
                  </Link>
                </>
            }
          </div>
        </div>
      </div>
    </nav>
  );
}

export default MainMenu;
