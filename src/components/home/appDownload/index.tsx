import React from 'react'
import Image from "next/image";
import Link from "next/link";
import { CgSoftwareDownload } from 'react-icons/cg';

const AppDownload = () => {
    return (
        <div className='lg:container md:w-full sm:w-full mx-auto pt-20 px-16 mb-6 '>
           
            <div className="flex lg:flex-row md:flex-col sm:flex-col xsm:flex-col w-full justify-between items-center py-12 px-12 border border-[#CED4DA] mx-auto rounded-[10px] bg-[url('/images/bg/bgApp.png')] bg-[length:1252px_220px] bg-center bg-no-repeat ">
                <div className="flex lg:flex-row md:flex-col sm:flex-col ">
                    <div className=''>
                        <Link href="/">
                            <a>
                                <Image
                                    alt="logo"
                                    width={64}
                                    height={64}
                                    layout={"fixed"}
                                    src={"/images/logos/bgBlue-logo.svg"}
                                />
                            </a>
                        </Link>
                    </div>
                    <div className='flex flex-col mr-4'>
                        <h3 className='text-[18px] text-black font-semibold leading-8'>دانلود اپلیکیشن فرادرس</h3>
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