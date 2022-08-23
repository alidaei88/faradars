import React, { useState } from 'react'
import Image from 'next/image';
import { Transition } from '@tailwindui/react';


const Organizations = () => {

    const [activeMobin, setActiveMobin] = useState(false)
    const [activeFoolad, setActiveFoolad] = useState(false)
    const [activeElmoSanaat, setActiveElmoSanaat] = useState(false)
    const [activeMellat, setActiveMellat] = useState(false)
    const [activeZamyad, setActiveZamyad] = useState(false)

    return (
        <div className=' py-[10px] '>
            <div className='flex flex-row md:flex-col sm:flex-col xsm:flex-col justify-center items-center'>
                <div>
                    <p>سازمان‌های پیشرو و هدفمند با <a className='text-[#1e88e5] cursor-pointer font-semibold'>آموزش‌های سازمانی فرادرس (+)</a>، فرصت رشد و ارتقای مهارت را برای کارکنان خود فراهم ساخته‌اند.</p>
                </div>
                <div className=' w-1/3 flex justify-evenly items-center'>
                    <div className='mx-1 my-2 w-[80PX] h-[80px]'
                        onMouseEnter={() => setActiveMobin(true)}
                        onMouseLeave={() => setActiveMobin(false)}>
                        {
                            activeMobin ?
                                <Transition
                                    appear={false}
                                    show={activeMobin}
                                    enter="transition-opacity duration-2000"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-1000"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >

                                    <Image
                                        className=''
                                        alt="mobin"
                                        width={80}
                                        height={80}
                                        layout={"fixed"}
                                        src={"/images/logos/Organizations/Mobin.png"}
                                    />

                                </Transition>
                                :
                                <Transition
                                    appear={true}
                                    show={!activeMobin}
                                    enter="transition-opacity duration-2000"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="transition-opacity duration-1000"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >

                                    <Image
                                        className=''
                                        alt="mobin"
                                        width={73}
                                        height={73}
                                        layout={"fixed"}
                                        src={"/images/logos/Organizations/Mobin-gray.png"}
                                    />

                                </Transition>
                        }

                    </div>
                    <div className='mx-1 my-2'
                        onMouseEnter={() => setActiveFoolad(true)}
                        onMouseLeave={() => setActiveFoolad(false)}>
                        {
                            activeFoolad ?
                                <Image
                                    alt="foolad-mobarakeh"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/Foolad.png"}
                                />
                                : <Image
                                    alt="foolad-mobarakeh"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/Foolad-gray.png"}
                                />

                        }

                    </div>
                    <div className='mx-1 my-2'
                        onMouseEnter={() => setActiveMellat(true)}
                        onMouseLeave={() => setActiveMellat(false)}
                    >
                        {
                            activeMellat ?
                                <Image
                                    alt="mellat"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/Mellat.png"}
                                />
                                :
                                <Image
                                    alt="mellat"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/Mellat-gray.png"}
                                />
                        }

                    </div>
                    <div className='mx-1 my-2'
                        onMouseEnter={() => setActiveElmoSanaat(true)}
                        onMouseLeave={() => setActiveElmoSanaat(false)}
                    >
                        {
                            activeElmoSanaat ?
                                <Image
                                    alt="elm-o-sanaat"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/ElmoSanat.png"}
                                />
                                :
                                <Image
                                    alt="elm-o-sanaat"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/ElmoSanat-gray.png"}
                                />

                        }
                    </div>
                    <div className='mx-1 my-2'
                        onMouseEnter={() => setActiveZamyad(true)}
                        onMouseLeave={() => setActiveZamyad(false)}
                    >
                        {
                            activeZamyad ?
                                <Image
                                    alt="zamyad"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/Zamyad.png"}
                                />
                                :
                                <Image
                                    alt="zamyad"
                                    width={80}
                                    height={80}
                                    layout={"fixed"}
                                    src={"/images/logos/Organizations/Zamyad-gray.png"}
                                />
                        }
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Organizations