import Image from 'next/image';
import { FC } from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header'
import { FcGoogle } from "react-icons/fc"
import { FaLinkedin, FaEyeSlash } from "react-icons/fa"
import Link from 'next/link';

const Login: FC = () => {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <section className='container w-full p-6 mx-auto flex flex-row justify-evenly items-center my-8 flex-grow'>
        <div className='container lg:w-1/3 md:full sm:w-full xsm:w-full  mx-6 p-6 border border-[#ced4da] shadow-md'>
          <h1 className='text-[#455057] text-center text-2xl mt-2 mb-4 '>ورود به حساب کاربری</h1>
          <form className=" w-fuul flex flex-col justify-between items-center space-y-6 " action="#" method="POST">
            <div className='w-3/4'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                شماره موبایل یا ایمیل<span className='text-red-800 mr-1'>(الزامی)</span>
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className='w-3/4'>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                رمز عبور<span className='text-red-800 mr-1'>(الزامی)</span>
              </label>
              <div className="mt-1 relative">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FaEyeSlash className='absolute left-1 top-2 cursor-pointer' />
              </div>
            </div>

            <div className="flex items-center justify-between">

              <div className="text-sm ">
                <a href="#" className="font-semibold text-[#1e88E5] hover:text-indigo-500">
                  رمز عبور خود را فراموش کرده‌اید؟
                </a>
              </div>
            </div>

            <div className='w-3/4'>
              <button
                type="submit"
                className="w-full text-[#b0b0b8] bg-[#f1f1f1] flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium"
              >
                ورود
              </button>
            </div>
            <button
              type="button"
              className=" w-3/4 inline-flex justify-center bg-transparent items-center px-2 py-3 border border-[#518ef8] shadow-sm text-sm font-normal rounded-sm text-[#518ef8] bg-indigo-600  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              ورد با حساب گوگل
              <FcGoogle className="mx-2 h-5 w-5 " aria-hidden="true" />
            </button>
            <button
              type="button"
              className="w-3/4 inline-flex justify-center bg-transparent items-center px-2 py-3 border border-[#518ef8] shadow-sm text-sm font-normal rounded-sm text-[#518ef8] bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
        <div className='container w-1/3 md:block sm:hidden xsm:hidden xxsm:hidden '>
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