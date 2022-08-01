import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useRouter } from "next/router";
import { home_statistics } from "../../../dummy/data";

export default function HomeHero({ tags }: any) {
  const searchRef: any = useRef<HTMLInputElement | undefined>();
  const router = useRouter();

  const submitHandel = (e: any) => {
    e.preventDefault();
    router.push(`/search/${searchRef.current.value}`);
  };
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
          <div className="text-center w-3/5 mx-auto">
            <form className="mb-5 sm:flex sm:items-center justify-center mb-15">
              <div className="w-full">
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="h-10 px-2 shadow-sm w-full sm:text-sm border-[#90c4f2] rounded-sm focus:outline-none"
                  placeholder="جستجوی آموزش"
                  ref={searchRef}
                />
              </div>
              <button
                className="mt-3 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent hover:bg-[#409444] hover:border-[#3d8b40] shadow-sm font-medium rounded-sm text-white bg-green-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm mr-2"
                onClick={submitHandel}
              >
                جستجو
              </button>
            </form>
          </div>
          <div className="mt-5 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
            <div className="flex flex-wrap items-between">
              {tags &&
                tags.map((tag: any, idx: number) => (
                  <Link href={`/search/${tag.term}`} key={idx}>
                    <a className="flex items-center justify-center px-2 py-2 ml-2 rounded-xl text-xs bg-white hover:bg-indigo-50">
                      {tag.term}
                    </a>
                  </Link>
                ))}
            </div>
          </div>
          <div className="grid lg:grid-cols-6 w-5/6 mx-auto mt-20 bg-[#00000066] p-6 md:grid-cols-3 md:gap-y-6 xsm:grid-cols-2 xsm:gap-y-6">
            {home_statistics.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center"
              >
                <p className="text-white"> {item.statistics} +</p>
                <p className="text-white">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
