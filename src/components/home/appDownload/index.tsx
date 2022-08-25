import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { CgSoftwareDownload } from 'react-icons/cg';

const AppDownload = () => {
    return (
        <div className='lg:container md:w-full sm:w-full xsm:w-full mx-auto pt-20 px-16 mb-6 '>
           
            <div className="flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col w-full justify-between items-center lg:py-12 md:py-5 sm:py-5 xsm:py-5 px-12 border border-[#CED4DA] mx-auto rounded-[10px] bg-[url('/images/bg/bgApp.png')] bg-[length:1252px_220px] bg-center bg-no-repeat ">
                <div className="flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col ">
                    <div className='md:flex sm:flex xsm:flex justify-center items-center'>
                        <Link href="/">
                            <a className='lg:w-[64px] lg:h-[64px] md:w-[36px] md:h-[36px] sm:w-[36px] sm:h-[36px] xsm:w-[36px] xsm:h-[36px]'>
                                <Image
                                    alt="logo"
                                    width={64}
                                    height={64}
                                    layout={"responsive"}
                                    src={"/images/logos/bgBlue-logo.svg"}
                                />
                            </a>
                        </Link>
                        <h3 className='lg:hidden md:inline-block sm:inline-block xsm:inline-block mr-4 text-[16px] text-black font-semibold leading-8'>دانلود اپلیکیشن فرادرس</h3>
                    </div>
                    <div className='flex flex-col mr-4'>
                        <h3 className='text-[18px] lg:block md:hidden sm:hidden xsm:hidden text-black font-semibold leading-8'>دانلود اپلیکیشن فرادرس</h3>
                        <p className='text-[#6c757d] text-[14px] font-normal pt-[5px]'>با دریافت اپلیکیشن فرادرس از گوگل‌ پلی، می‌توانید تمامی امکانات سایت را روی موبایل خود نیز داشته باشید.</p>
                    </div>
                </div>
                <div className='md:mt-4 sm:mt-4 xsm:mt-4'> 
                    <button className='text-white bg-[#1e88e5] font-light text-base h-[48px] w-[200px] rounded-[10px] flex justify-center items-center '><CgSoftwareDownload className='text-2xl ml-2' />دانلود اپلیکیشن</button>
                </div>
            </div>
        </div>
    )
}

export default AppDownload