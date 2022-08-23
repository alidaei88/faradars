import React from 'react';
import Link from 'next/link';
import { useEffect, useState, useContext } from 'react';
import { CurrentUserContext } from "../../../ContextAPi";


const RegOrLogin = () => {

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

    return (
        <>
            {
                !isLogin &&

                <div className=' flex flex-col justify-center items-center bg-[#00255c] px-4 py-12 my-4'>
                <h4 className='text-white font-normal text-xl text-center mb-[0.5rem]'>به جامعه میلیونی دانشجویان فرادرس بپیوندید و به هزاران ساعت آموزش در حوزه‌های گوناگون دسترسی داشته باشید.</h4>
                <Link href={"/login"}>
                    <a>
                        <button className='item-center font-medium text-[14px] text-white flex mt-[3rem] bg-[#1e88e5] rounded-[3px] px-[18px] py-[8px]'>ورود و عضویت</button>
                    </a>
                </Link>
    
            </div>
            }
        </>

    )
}

export default RegOrLogin