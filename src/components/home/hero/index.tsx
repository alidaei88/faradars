import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";
import { home_statistics } from "../../../dummy/data";
import { thousandSeprator } from "../../../utils/helper"

export default function HomeHero({ tags }: any) {
  const searchRef: any = useRef<HTMLInputElement | undefined>();
  const router = useRouter();

  const submitHandel = (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchRef.current.value}`);
  };
  return (
    <section className="relative pb-14">
      <div className="absolute inset-x-0 bottom-0 bg-gray-200" />
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
        <div className="relative py-6 px-5 container mx-auto">
          <h3 className="text-center text-[1rem] font-normal contrast-200 text-white mb-6">
            در بین هزاران ساعت آموزش فرادرسی جستجو کنید و به جمع میلیونی
            دانشجویان فرادرس بپیوندید.
          </h3>
          <div className="text-center w-2/5 lg:min-w-0 md:min-w-full mx-auto">
            <form className="mb-5 max-w-full sm:flex sm:items-center justify-center mb-15">
              <div className="w-full">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="h-9 px-2 py-3 shadow-sm w-full sm:text-sm border-[#90c4f2] rounded-[0.25rem] focus:outline-none focus:border-2 focus:border-[#80bdff] placeholder:font-thin placeholder:text-[#495057] placeholder:xl:text-sm placeholder:xxsm:text-xs"
                  placeholder="جستجوی آموزش ..."
                  ref={searchRef}
                />
              </div>
              <button
                className="mt-3 w-full inline-flex items-center bg-[#28A745] justify-center px-4 py-2 border border-transparent shadow-sm font-extralight text-[#ffffff] hover:bg-[#218838] hover:border-[#1e7e34] sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mr-2"
                onClick={submitHandel}
              >
                جستجو
              </button>
            </form>
          </div>
          <div className="mt-5 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="flex flex-wrap items-between px-2">
              {tags &&
                tags.map((tag: any, idx: number) => (
                  <Link href={`/search/${tag.term}`} key={idx}>
                    <a className="flex items-center justify-center px-1 py-2 ml-2 rounded-xl text-xs font-light bg-white hover:">
                      {tag.term}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
          <div className="grid w-5/6 lg:grid-cols-6 container mx-auto mt-20 bg-[#00000066] p-4  md:grid-cols-3 md:gap-y-6 xsm:grid-cols-2 xsm:gap-y-6">
            {home_statistics.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col  justify-center items-center py-1"
              >
                <p className="text-white text-lg font-normal"> {thousandSeprator(item.statistics)} +</p>
                <p className="text-white text-xs font-light">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
