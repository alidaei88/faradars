import React from 'react'

const subjects = [
        { title:"دانشگاهی و تخصصی", value: ["نگارش آکادمیک","مهندسی برق", "مهندسی مکانیک", "مهندسی عمران","تحقیق در عملیات","مهندسی کامپیوتر","آمار و احتمالات", "علوم اقتصادی", "موارد بیشتر..." ]},
        { title:"برنامه‌نویسی", value: ["اندروید","پی اچ پی (PHP)", "پایتون (Python)", "جاوا (Java)","برنامه‌نویسی C","وردپرس","HTML و CSS", "آموزش‌ها متلب", "موارد بیشتر..." ]},
        { title:"یادگیری ماشین", value: ["داده‌کاوی و یادگیری ماشین","هوش مصنوعی", "شبکه‌های عصبی", "الگوریتم‌های تکاملی","بهینه‌سازی هوشمند","سری‌های زمانی","مدل‌سازی و تخمین"]},
        { title:"نرم افزارهای کاربردی", value: ["مهارت‌های ICDL","طراحی و گرافیک", "میکروکنترلر", "برنامه‌نویسی R","Illustrator","طراحی مکانیکی","Maya (مایا)"]},
        { title:"مباحث مشترک و عمومی", value: ["زبان‌های خارجی","ریاضیات دانشگاهی", "مهارت بازار کار", "آموزش‌های نوجوانان","دبیرستان","کسب و کار","مهارت‌های ارائه", "موارد بیشتر..." ]},
]


const Subjects = () => {
  return (
      <div className='w-full flex justify-start px-[80px] py-[30px] border-t flex-wrap' >
          {
              subjects.map((item, idx) => 
                  <div className='lg:w-1/5 md:w-2/6 sm:w-3/6 xsm:w-full' key={idx} >
                  <p className=' mt-3 mb-4 font-semibold text-[0.95rem]'>{item.title}</p>
                  <ul className='flex flex-col'>
                    {
                      item.value.map((sbj, subIdx) => <li key={subIdx} className='font-light mb-2 cursor-pointer text-[#4c555d] hover:text-[#202325]'>{ sbj }</li> )
                    }
                  </ul>
                  </div>
                  
              )
          }
    </div>
  )
}

export default Subjects