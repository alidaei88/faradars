import Image from "next/image";
import Link from "next/link";
import { home_categories } from "../../../dummy/data";

export default function HomeCategories() {
  function renderCats() {
    return home_categories.map((item) => (
      <Link href={item.url} key={item.id}>
        <a className="flex flex-col">
          <Image width={48} height={48} alt={item.title} src={item.image} />
          <span className="mt-3">{item.title}</span>
        </a>
      </Link>
    ));
  }

  return (
    <section className="bg-white container mx-auto">
      <div className="py-16 text-center">
        <h3 className="font-bold mb-12">موضوعات و محورهای آموزشی منتخب</h3>
        <div className="grid xs:grid-cols-3 xxsm:grid-cols-2 xsm:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 grid-cols-12 gap-y-20 gap-4">
          {renderCats()}
        </div>
        <button type="submit" className="w-full inline-flex items-center justify-center px-6 py-3 mt-8 rounded-sm text-white bg-blue-500 sm:w-auto sm:text-sm">
          همه آموزش ها
        </button>
      </div>
    </section>
  );
}
