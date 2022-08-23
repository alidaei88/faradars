import React from 'react'
import Image from "next/image";

const Teaching = () => {
    return (
        <div className='container mx-auto'>
            <div className='flex lg:flex-row sm:flex-col xsm:flex-col justify-around items-center py-12 md:flex-col'>
                <div className='w-1/4 h-auto'>
                    <Image
                        src="/images/teach/teaching.svg"
                        alt="Teaching in Faradars"
                        layout="responsive"
                        width={338}
                        height={285}
                    />
                </div>
                <div className='flex flex-col justify-evenly items-start font-medium'>
                    <h1 className=' text-4xl font-normal mb-3 lg:mt-0 md:mt-12 mt-12'>تدریس در فرادرس</h1>
                    <p className=' w-5/6 text-[0.95rem] mb-4 font-light'>برای همکاری آموزشی، تدریس و ارایه آموزش در فرادرس و پیوستن به آن به عنوان عضو هیات علمی، به لینک زیر مراجعه کنید.</p>
                    <button className='font-light text-sm bg-[#1e88e5] text-white px-3 py-[7px] rounded-[4px]'>اطلاعات بیشتر</button>
                </div>
            </div>
        </div>
    )
}

export default Teaching