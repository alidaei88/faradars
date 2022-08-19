import React from 'react';
import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

const TooltipModal = () => {

    const [open, setOpen] = useState(true)

    return (
          <div className='bg-black opacity-80 text-white text-base font-light px-2 py-4'>افزودن به علاقه‌مندی‌ها</div>
  )
}

export default TooltipModal


