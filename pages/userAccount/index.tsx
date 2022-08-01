import { NextPage } from "next";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import Footer from "../../src/components/layout/footer";
import Header from "../../src/components/layout/header";
import { FaUserAlt } from "react-icons/fa";
import { CurrentUserContext } from "../../src/ContextAPi";


const UserAccountPage: NextPage = () => {

    const [email, setEmail] = useState()
    const router = useRouter()
    const {userData, setUserData} = useContext(CurrentUserContext)

    useEffect(() => {
        try {
            // const userData = JSON.parse(localStorage.getItem("data") || "")
            setEmail(userData?.data?.user?.email)
        } catch (err) {
            console.log(err)
        }
    }, [userData])
    
    const handleClick = () => {
        localStorage.removeItem("data")
        setUserData("")
        router.push("/")
    }
    return (
        <div className="flex flex-col">
            <Header className="w-full" />
            <div className=" flex h-[85vh] items-start justify-center mt-10 ">
                {
                    email ?
                        <div className="w-full flex justify-center items-center ">
                            <div className="mx-5"><FaUserAlt /></div>
                            {email}
                            <button onClick={handleClick} className="p-3 mx-5 border-none bg-red-400 text-center text-lg text-red-900 rounded-md">خروج از سیستم</button>
                        </div>
                        :
                        <p>user not found</p>

                }
            </div>
            <Footer />
        </div>

    )
}

export default UserAccountPage