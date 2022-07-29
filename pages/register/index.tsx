import { NextPage } from 'next'
import React from 'react'
import Footer from '../../src/components/layout/footer'
import Header from '../../src/components/layout/header'

const RegisterPage: NextPage = () => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='container h-[87vh] bg-slate-300 flex justify-center items-center mx-auto'>Register page</div>
      <Footer />
    </div>
    
  )
}

export default RegisterPage