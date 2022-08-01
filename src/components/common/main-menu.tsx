import Image, { ImageProps } from "next/image";
import { FC, InputHTMLAttributes, MutableRefObject, useRef, useEffect, useState, useContext } from "react";
import { VscSearch } from 'react-icons/vsc';
import { FaChalkboardTeacher, FaUserCircle } from 'react-icons/fa'
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
    <nav className=" w-full px-6 sticky top-0 right-0 z-10 bg-white border border-b border-[#E3E3E3]-100">
      <div className="container flex justify-evenly items-center mx-auto">
        <div className="flex w-4/5 justify-start ">
          <div className="w-1/5 flex justify-center items-center">
            <Link href="/">
              <a>
                <Image
                  className="h-14 w-28 mx-8 mt-3 "
                  alt="logo"
                  width={106}
                  height={28}
                  layout={"fixed"}
                  src={"/images/logos/logo.svg"}
                />
              </a>
            </Link>
          </div>

          <div className="flex w-4/6">
            <button className="bg-white hover:bg-[#1E88E5] hover:bg-opacity-10 text-[#1e85e5] font-normal h-8 px-4 mx-4 my-auto border border-[#1e85e5] rounded">همه آموزش‌ها</button>
            <div className=" mt-1 relative w-2/4 flex items-baseline rounded-lg my-auto">
              <input
                type="text"
                name="search"
                id="search"
                className="shadow-sm py-2 block w-full pr-2 my-3 sm:text-sm border-gray-300 rounded-md focus:shadow-md focus:outline-[#1E88E5]"
                placeholder="جستجوی آموزش..."
                ref={searchRef}
              />
              <div className="absolute inset-y-0 left-0 flex py-1.5 ">
                <kbd className="inline-flex items-center rounded px-2 text-md font-medium text-gray-400">
                  <button onClick={handleSearch}><VscSearch /></button>
                </kbd>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between align-middle w-2/6">
          <p className="flex items-center align-middle cursor-pointer text-[14px] text-[#495057]"> <span className="text-2xl mt-1 text-slate-500 ml-1" ><FaChalkboardTeacher /></span>تدریس در فرادرس</p>
          {
            isLogin ?
              <Link href={"/userAccount"}>
                <a>
                  <p className="flex items-center align-middle cursor-pointer text-[14px] text-[#495057]"> <span className="text-2xl mt-1 text-slate-500 ml-1" ><FaUserCircle /></span>حساب کاربری</p>
                </a>
              </Link>
              :
              <>
                <Link href={"/login"}>
                  <a>
                    <p className="cursor-pointer text-[#495057] text-[14px]">ورود</p>
                  </a>
                </Link><Link href={`/register`}>
                  <a>
                    <p className="cursor-pointer text-[#495057] text-[14px]">ثبت نام</p>
                  </a>
                </Link>
              </>
          }


        </div>
      </div>

    </nav>
  );
}

export default MainMenu;
