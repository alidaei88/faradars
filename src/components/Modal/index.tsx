import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'

export default function Modal({open, setOpen} :any) {


  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" initialFocus={cancelButtonRef} onClose={setOpen}>
        <div className="flex  items-end justify-center min-h-screen pt-4 px-4 mx-14 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
              <div>           
                <div className="mt-3 text-center sm:mt-5">
                  <div className="mt-2">
                    <p className="font-medium p-[26px_81px] text-[0.95rem] text-[#545454] leading-7">
                    افزودن آموزش به فهرست علاقه‌مندی‌ها، نیازمند ورود به حساب کاربری است.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-center mt-5 pb-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <a href='./login'>
                <button
                  type="button"
                  className="undefined items-center font-medium text-[14px] rounded-[10px] mt-3 ml-3 w-[115px] justify-center h-[42px]
                  bg-[#1e88e5] hover:bg-[#007aff] text-white  p-[8px_18px]"
                  onClick={() => setOpen(false)}
                >
                  ورود
                  </button>
                </a>
                <a>
                <button
                  type="button"
                  className="font-medium text-[15px]  rounded-[10px] mt-3 ml-3 mr-3 w-[115px] flex justify-center h-[42px] flex-row-reverse 
                  bg-transparent hover:bg-[#e5e7eb] text-black focus-visible:border-[rgb(217 214 214)] border border-[rgb(217 214 214)] p-[8px_18px]"
                  onClick={() => setOpen(false)}
                  ref={cancelButtonRef}
                >
                  انصراف
                </button>
                </a>
                
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
