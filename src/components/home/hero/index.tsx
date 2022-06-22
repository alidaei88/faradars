import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="relative">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
      <div className="w-full">
        <div className="absolute inset-0">
          <div className="h-full w-full object-cover">
            <Image
              layout="fill"
              objectFit="cover"
              src="/images/bg/bg-hero.jpg"
              alt="hero-bg"
            />
          </div>
          <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
        </div>
        <div className="relative py-16 sm:py-24 lg:py-32 container mx-auto">
          <h3 className="text-center text-lg text-white mb-6">
            در بین هزاران ساعت آموزش فرادرسی جستجو کنید و به جمع میلیونی
            دانشجویان فرادرس بپیوندید.
          </h3>
          <div className="text-center ">
            <form className="mb-5 sm:flex sm:items-center justify-center mb-15">
              <div className="w-full sm:max-w-xs">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="h-10 px-2 shadow-sm w-full sm:text-sm border-[#90c4f2] rounded-sm focus:outline-none"
                  placeholder="جستجوی آموزش"
                />
              </div>
              <button
                type="submit"
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent hover:bg-[#409444] hover:border-[#3d8b40] shadow-sm font-medium rounded-sm text-white bg-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mr-2"
              >
                جستجو
              </button>
            </form>
          </div>
          <div className="mt-5 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="flex">
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  ریاضی
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  اکسل
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  فیزیک
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  اتوکد
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  فن بیان
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  زبان انگلیسی
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  زبان
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  فتوشاپ
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                  متلب
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                 ارز دیجیتال
                </a>
              </Link>
              <Link href={"/lessons"}>
                <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                پایتون  
                </a>
              </Link>
            </div>
          </div>
          <div className="w-5/6 mx-auto mt-6 bg-[#00000066] p-6">box</div>
        </div>
      </div>
    </section>
  );
}
