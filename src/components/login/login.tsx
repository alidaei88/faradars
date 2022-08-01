import Image from 'next/image';
import { ChangeEventHandler, FC, useState, useContext } from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header'
import { FcGoogle } from "react-icons/fc"
import { FaLinkedin, FaEyeSlash, FaEye } from "react-icons/fa"
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { CurrentUserContext } from '../../ContextAPi';

const url: string = "https://faradars.org/api/v1.1/login";
const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


const Login: FC = () => {

  const [isHidden, setIsHidden] = useState<HTMLButtonElement | Boolean>(true)
  const [userName, setUserName] = useState<any>()
  const [password, setPassword] = useState<any>()
  const [emailIsIncorrect, setEmailIsIncorrect] = useState<any>(false)
  const [userNotFound, setUserNotFound] = useState<any>()
  const [passwordlIsCorrect, setPasswordIsCorrect] = useState<any>(false)
  const router = useRouter();
  const { setUserData } = useContext(CurrentUserContext)

  const handleEmailChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: string = e.target.value
    // if (!value.includes("@" && ".com") && value.length > 0) {
    if ((!regex.test(value)) && value.length > 0) {
      setEmailIsIncorrect(true)
    } else setEmailIsIncorrect(false)

    setUserName(value)
  }

  const handlePasswordChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (value.length > 6) setPasswordIsCorrect(true)
    setPassword(value)
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const data: any = {
      username: userName,
      password: password,
      bypass: "fara1401"
    };
    axios.post(url, data, {
      headers: {
        'accept': "application/json",
        'content-type': "application/json",
      }
    })
      .then(res => {
        localStorage.setItem("data", JSON.stringify(res.data));
        router.push(`/`)
      })
      .catch(err => {
        setUserNotFound(err.response.data.message);
        setPassword("")
      })  
  }


  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <section className='container w-full p-6 mx-auto flex flex-row justify-evenly items-center my-8 flex-grow'>
        <div className='container lg:w-1/3 md:w-full sm:w-full xsm:w-full  mx-6 p-6 border border-[#ced4da] shadow-md'>
          <h1 className='text-[#455057] text-center text-2xl mt-2 mb-4 '>ورود به حساب کاربری</h1>
          <form className=" w-fuul flex flex-col justify-between items-center space-y-6 " onSubmit={handleSubmit}>
            <div className='w-3/4'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                شماره موبایل یا ایمیل {/*<span className='text-red-800 mr-1'>(الزامی)</span> */}
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="userName"
                  type="email"
                  value={userName}
                  autoComplete="email"
                  required
                  className="appearance-none text-center block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handleEmailChange}
                />
                {
                  emailIsIncorrect && <p className='text-xs text-red-800 font-medium'>لطفا ایمیل را صحیح وارد کنید.</p>
                }
                {
                  userNotFound  && <p  className='text-xs text-red-800 font-medium'>{userNotFound}</p>
                }
              </div>
            </div>
            <div className='w-3/4'>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                رمز عبور {/*<span className='text-red-800 mr-1'>(الزامی)</span> */}
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type={`${isHidden ? "password" : "text"}`}
                  autoComplete="current-password"
                  value={password}
                  required
                  className="appearance-none text-center block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  onChange={handlePasswordChange}
                />
                <FaEyeSlash className={`${isHidden ? "absolute left-2 top-3 cursor-pointer" : "hidden"}`} onClick={(e: any) => setIsHidden(prev => !prev)} />
                <FaEye className={`${isHidden ? "hidden" : "absolute left-2 top-3 cursor-pointer"}`} onClick={(e: any) => setIsHidden(prev => !prev)} />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm ">
                <Link href={`/login/forget`}>
                  <a href="#" className="font-semibold text-[#1e88E5] hover:text-indigo-500">
                    رمز عبور خود را فراموش کرده‌اید؟
                  </a>
                </Link>
              </div>
            </div>

            <div className='w-3/4'>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#1E88E5] disabled:text-[#b0b0b8] disabled:bg-[#f1f1f1]`}
                disabled={!passwordlIsCorrect || emailIsIncorrect}
              >
                ورود
              </button>
            </div>
            <button
              type="button"
              className=" w-3/4 inline-flex justify-center items-center px-2 py-3 border border-[#518ef8] shadow-sm text-sm font-normal rounded-sm text-[#518ef8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ورد با حساب گوگل
              <FcGoogle className="mx-2 h-5 w-5 " aria-hidden="true" />
            </button>
            <button
              type="button"
              className="w-3/4 inline-flex justify-center bg-transparent items-center px-2 py-3 border border-[#518ef8] shadow-sm text-sm font-normal rounded-sm text-[#518ef8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ورد با لینکدین
              <FaLinkedin className="mx-2 h-5 w-5" aria-hidden="true" />
            </button>
            <p className='text-[#6c757d]'>
              هنوز عضو نشده‌اید؟
              <span>
                <Link href={`/register`} >
                  <a className='cursor-pointer text-[#1e88e5] font-light mr-2'>ثبت نام کنید </a>
                </Link>
              </span>
            </p>
          </form>
        </div>
        <div className='container lg:w-1/3 md:block md:w-2/3 sm:hidden xsm:hidden xxsm:hidden '>
          <Image
            width={402}
            height={375}
            src='/images/login/login-main.svg'
            alt='login Image'
            layout='responsive'
          />
        </div>

      </section>
      <Footer />
    </div>
  )
}

export default Login