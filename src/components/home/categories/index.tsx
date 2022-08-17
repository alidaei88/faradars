import Image from "next/image";
import Link from "next/link";
import { home_categories } from "../../../dummy/data";

export default function HomeCategories() {

  return (
    <section className="bg-white container mx-auto">
      <div className="py-16 text-center">
        <h3 className="font-bold text-lg mb-8">موضوعات و محورهای آموزشی منتخب</h3>
        <div className="grid mx-28 justify-items-center xs:grid-cols-3 xxsm:grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 grid-cols-12 gap-y-2  gap-4 ">
          {
            home_categories.map((item) => (
              <Link href={item.url} key={item.id}>
                <a className="flex flex-col justify-center w-[123px] h-[157px] hover:border border-[#e5e7eb] hover:bg-[#f8f9fa] ">
                  <Image width={48} height={48} alt={item.title} src={item.image} />
                  <span className="mt-3 font-thin text-base">{item.title}</span>
                </a>
              </Link>
            )
            )}
        </div>
        <button type="submit" className="w-full inline-flex items-center justify-center px-3 py-3 mt-8 rounded-[3px] font-light text-white bg-[#1e88e5] border-[#5355545] sm:w-auto sm:text-sm hover:bg-[#1774c6] hover:border-[#166dba] focus:drop-shadow-xl">
          همه آموزش‌ها
        </button>
      </div>
    </section>
  );
}
