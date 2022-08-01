import Image from 'next/image';
import { ChangeEventHandler, FC, useState } from 'react';
import Footer from '../layout/footer';
import Header from '../layout/header'
import { FcGoogle } from "react-icons/fc"
import { FaLinkedin, FaEyeSlash, FaEye } from "react-icons/fa"
import Link from 'next/link';
import axios from 'axios';

const Forget: FC = () => {

    return (
        <div className='flex flex-col h-screen'>
            <Header />
            <section className='container w-full p-6 mx-auto flex flex-row justify-evenly items-center my-8 flex-grow'>
                <div className='container lg:w-1/3 md:full sm:w-full xsm:w-full  mx-6 p-6 border border-[#ced4da] shadow-md'>
                    <h1 className='text-[#455057] text-center text-2xl mt-2 mb-4 '>بازیابی رمز عبور</h1>
                    <form className=" w-fuul flex flex-col justify-between items-center space-y-6 ">
                        <div className='w-3/4'>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                شماره موبایل یا ایمیل {/*<span className='text-red-800 mr-1'>(الزامی)</span> */}
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="userName"
                                    type="email"
                                    value={""}
                                    autoComplete="email"
                                    required
                                    className="appearance-none text-center block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                //   onChange={"handleEmailChange" }
                                />
                            </div>
                            <div className=''>
                                <button
                                    type="submit"
                                    className={`w-full flex justify-center py-2 px-4 mt-3 border border-transparent rounded-sm shadow-sm text-sm font-medium text-white bg-[#1E88E5] disabled:text-[#b0b0b8] disabled:bg-[#f1f1f1]`}
                                // disabled={}
                                >
                                    ارسال درخواست
                                </button>
                            </div>
                        </div>
                        <p className='text-[#6c757d]'>
                            هنوز عضو نشده‌اید؟
                            <span>
                                <Link href={`/register`} >
                                    <a className='cursor-pointer text-[#1e88e5] font-light mr-2'>ثبت نام کنید </a>
                                </Link>
                            </span>
                        </p>
                        <p className='text-[#6c757d]'>
                                   بازگشت به
                            <span>
                                <Link href={`/login`} >
                                    <a className='cursor-pointer text-[#1e88e5] font-light '> صفحه ورود</a>
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

export default Forget;