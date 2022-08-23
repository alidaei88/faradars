import React, { useState } from 'react';
import { MdRssFeed } from 'react-icons/md';
import { TiHeart } from 'react-icons/ti';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {

    const [isShow, setIsShow] = useState(false)

    const handleMoreClick = () => {
        setIsShow(true)
       
    }

    const handleCloseClick = () => {
        setIsShow(false)
    }

    const handleSubmit = (e: any) => {
        e.preventDefault();
    }
    
    return (
        <div className='bg-[#e8e9ea] pt-[48px]'>
            <div className='w-3/5 mx-auto px-8 py-12'>
                <div className='flex justify-center items-start'>
                    <div className='flex w-1/6 flex-col justify-start'>
                        <p className=' mt-3 font-semibold mb-2 text-[19px]'>لینک‌های مهم</p>
                        <ul className='flex flex-col'>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>آموزش‌ سازمانی</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>سنجش رضایتمندی</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>درباره ما</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>تماس با ما</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>حریم خصوصی</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>سوالات رایج</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>همکاری</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>تدریس در فرادرس</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a>مجله فرادرس</a>
                            </li>
                            <li className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>
                                <a className='flex'>RSS<MdRssFeed /></a>
                            </li>
                        </ul>
                    </div>
                    <div className='flex flex-col w-3/6'>
                        <div className='mb-4'>
                            <h3 className='mt-3 mb-2 font-semibold text-[19px]'>درباره فرادرس</h3>
                            <p className='text-[#4c555d] font-light'>سازمان علمی و آموزشی «فرادرس» (FaraDars) از قدیمی‌ترین وب‌سایت‌های یادگیری آنلاین است که توانسته طی بیش از ده سال فعالیت خود بالغ بر ۲۰,۰۰۰ ساعت آموزش ویدیویی در قالب بیش از ۵,۳۰۰ عنوان علمی، مهارتی و کاربردی را منتشر کند و به بزرگترین پلتفرم آموزشی ایران مبدل شود. <span onClick={() => handleMoreClick()} className='text-[#1e88e5] cursor-pointer'>مشاهده بیشتر </span></p>
                        </div>
                        {
                            isShow &&
                            <div>
                               <p className='font-light text-[#4c555d] '>فرادرس با پایبندی به شعار «دانش در دسترس همه، همیشه و همه جا» با همکاری بیش از ۱,۷۰۰ مدرس برجسته درزمینه‌های علمی گوناگون از جمله آمار و داده‌کاوی، هوش مصنوعی، برنامه‌نویسی، طراحی و گرافیک کامپیوتری، آموزش‌های دانشگاهی و تخصصی، آموزش نرم‌افزارهای گوناگون، دروس رسمی دبیرستان و پیش دانشگاهی، آموزش‌های دانش‌آموزی و نوجوانان، آموزش زبان‌های خارجی، مهندسی برق، الکترونیک و رباتیک، مهندسی کنترل، مهندسی مکانیک، مهندسی شیمی، مهندسی صنایع، مهندسی معماری و مهندسی عمران توانسته بستری را فراهم کند تا افراد با شرایط مختلف زمانی، مکانی و جسمانی بتوانند با بهره‌گیری از آموزش‌های با کیفیت، به روز و مهارت‌محور همواره به یادگیری بپردازند. شما هم با پیوستن به جمع بزرگ و بالغ بر یک میلیون نفری دانشجویان و دانش‌آموزان فرادرس و با بهره‌گیری از آموزش‌های آن، می‌توانید تجربه‌ای متفاوت از علم و مهارت‌آموزی داشته باشید. تمامی آموزش‌ها و خدمات این وبسایت، حسب مورد دارای مجوزهای لازم از مراجع مربوطه می‌باشند.<span className='cursor-pointer text-[#1e88e5]' onClick={()=> handleCloseClick()}>بستن</span></p>
                            </div>

                        }

                        <div className='flex flex-col'>
                            <h3 className='text-[19px]'>عضویت در خبرنامه فرادرس</h3>
                            <div className='mt-2 '>
                                <form onSubmit={handleSubmit} className=' flex items-center'>
                                    <input className=' w-3/6 px-3 py-[6px] rounded-[3px] outline-none focus:ring-2 border placeholder:text-base placeholder:font-extralight' placeholder="آدرس پست الکترونیک" type={"text"} />
                                    <p className='text-[14px] mr-2 font-normal text text-red-800 hidden'>ایمیل معتبر نیست</p>
                                    <button className='px-[18px] mx-2 py-[8px] bg-[#1e88e5] hover:bg-[#1774c6] cursor-pointer rounded-[3px] text-[14px] font-normal text-white border focus:outline-none focus:ring-2' type='submit'>ثبت نام</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className='w-2/6 pr-20 pl-4 pt-2 flex flex-col justify-center items-center'>
                        <div>
                            <Link href="/">
                                <a >
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
                        <div className='flex flex-col items-center mb-6'>
                            <small className='font-light mt-1'>©فرادرس ۱۳۸۷-۱۴۰۱. تمامی حقوق محفوظ است.</small>
                            <small className='flex items-center '>
                                <span className='text-[#202325] font-light'>ساخته شده با</span>
                                <span className='text-[#FF0000] mx-1 text-base'><TiHeart /></span>
                                <span className='text-[#202325] font-light'>در ایران</span>
                            </small>
                        </div>
                        <div className='flex'>
                            <div className=''>
                                <Link href="#" >
                                    <a className='cursor-default' >
                                        <Image
                                            alt="logo-nashr"
                                            width={72}
                                            height={72}
                                            layout={"fixed"}
                                            src={"/images/logos/nashr-min.png"}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href="https://trustseal.enamad.ir">
                                    <a  target={'_blank'}>
                                        <Image
                                            alt="logo-namad"
                                            width={72}
                                            height={72}
                                            layout={"fixed"}
                                            src={"/images/logos/namad.png"}
                                        />
                                    </a>
                                </Link>
                            </div>
                            <div>
                                <Link href='https://enamad.ir/'>
                                    <a  target={'_blank'}>
                                        <Image
                                            alt="logo-resane"
                                            width={72}
                                            height={72}
                                            layout={"fixed"}
                                            src={"/images/logos/resaneh.png"}
                                        />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About